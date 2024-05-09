import type { NextPage } from "next";
import { Canvas, useLoader } from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import CameraObrbitController from "../components/CameraOrbitController";
import { Torus } from "@react-three/drei";
import Lights from "../components/Lights";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";

type VirusType = {
    position:{x: number, z: number},
    box: number;

}

type props = {
  boundary: number,
  count: number;
}

const Virus1:React.FC<props> = ({boundary, count}) => {
  const model = useLoader(GLTFLoader, "./textures/Virus.glb");
  const [virus, setVirus] = useState([])

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  useEffect(()=>{
      const tempVirus: VirusType[] =[];
      for(let i = 0; i < count; i++){
        tempVirus.push({position: {x:0, z:0}, box:1})
      }
      console.log(tempVirus)
  }, [boundary, count])

  
  return (

    <group rotation={[0,4,0]}>
      <primitive object={model.scene.clone()}/>

    </group>




    // <>
    //   <group rotation={[0,4,0]}>
    //     <object3D position={[2, 0, 0]}>
    //       <primitive object={model.scene.clone()} />
    //     </object3D>

    //     <object3D position={[24, 0, 20]}>
    //       <primitive object={model.scene.clone()} />
    //     </object3D>

    //     <object3D position={[6, 0, 15]}>
    //       <primitive object={model.scene.clone()} />
    //     </object3D>
    //   </group>
    // </>
  );
};

const TexturedSpheres = () => {
  return (
    <>
      <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

const Home: NextPage = () => {
  const testing = true;

  return (
    <div className="container">
      <Canvas shadows>
        <axesHelper visible={testing} args={[2]} />
        <CameraObrbitController />

        {/*         
        //simple box */}
        <mesh scale={[0.5, 0.5, 0.5]} castShadow>
          <coneGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>

        <Virus1 boundary={50} count={20} />

        <TexturedSpheres />
        <Lights />

        {/* Ground */}
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
          <planeGeometry args={[25, 25]} />
          <meshStandardMaterial color={"lightblue"} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Home;
