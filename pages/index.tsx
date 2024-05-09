import type { NextPage } from "next";
import { Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import CameraObrbitController from "../components/CameraOrbitController";
import { Torus } from "@react-three/drei";


const TexturedSpheres = () => {
  return (
    <>
      <mesh scale={[.5,.5,.5]} position={[-1,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial  />
        </mesh>    

        <mesh scale={[.5,.5,.5]} position={[0,0,0]}>
        <sphereGeometry />
        <meshStandardMaterial  />
        </mesh>    

        <mesh scale={[.5,.5,.5]} position={[1,0,0]}>
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
        <ambientLight intensity={0.1} />
{/*         
        //simple box */}
        <mesh  scale={[0.5, 0.5, 0.5]}>
           <coneGeometry />
            <meshStandardMaterial color="blue" />
         </mesh>
          

<TexturedSpheres />
      </Canvas>
    </div>
  );
};

export default Home;
