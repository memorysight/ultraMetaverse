import type { NextPage } from "next";
import { Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import CameraObrbitController from "../components/CameraOrbitController";
import { Torus } from "@react-three/drei";
import Lights from '../components/Lights';

const TexturedSpheres = () => {
  return (
    <>
    

        <mesh scale={[.5,.5,.5]} position={[0,1,0]}>
        <sphereGeometry />
        <meshStandardMaterial  />
        </mesh>    

        
    </>
  )
}

const Home: NextPage = () => {
  const testing= true;

  return (
    <div className="container">
      <Canvas>
      {/* <Stats /> */}
        <axesHelper visible={testing} args={[2]}/>
        <CameraObrbitController />

{/*         
        //simple box */}
        <mesh  scale={[0.5, 0.5, 0.5]}>
           <coneGeometry />
            <meshStandardMaterial color="blue" />
         </mesh>
          

<TexturedSpheres />
          <Lights />
        {/* <ambientLight  intensity={0.3}/>
        <directionalLight position={[0,10,10]}/> */}
        <mesh rotation-x={Math.PI * -0.5}>
          <planeBufferGeometry args={[5,5]} />
          <meshStandardMaterial color={"green"}/>

        </mesh>

      </Canvas>
    </div>
  );
};

export default Home;
