import type { NextPage } from "next";
import { Canvas, useThree } from "@react-three/fiber";
import AnimatedBox from "../components/AnimatedBox";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useEffect } from "react";
import CameraObrbitController from "../components/CameraOrbitController";



const Home: NextPage = () => {
  return (
    <div className="container">
      <Canvas>
        <CameraObrbitController />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <AnimatedBox />
      </Canvas>
    </div>
  );
};

export default Home;
