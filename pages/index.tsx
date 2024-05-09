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
      <Canvas shadows>
    
        <axesHelper visible={testing} args={[2]}/>
        <CameraObrbitController />

{/*         
        //simple box */}
        <mesh  scale={[0.5, 0.5, 0.5]} castShadow>
           <coneGeometry />
            <meshStandardMaterial color="blue" />
         </mesh>
          

          <TexturedSpheres />
          <Lights />
     
     {/* Ground */}
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
          <planeGeometry args={[25,25]} />
          <meshStandardMaterial color={"green"}/>

        </mesh>

      </Canvas>
    </div>
  );
};

export default Home;
