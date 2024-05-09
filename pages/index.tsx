import type { NextPage } from "next";
import { Canvas} from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";

import CameraObrbitController from "../components/CameraOrbitController";


const Home: NextPage = () => {
  const testing= true;

  return (
    <div className="container">
      <Canvas>
        <axesHelper visible={testing} args={[2]}/>
        <CameraObrbitController />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default Home;
