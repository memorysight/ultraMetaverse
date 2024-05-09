import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {useHelper} from "@react-three/drei";

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    console.log("Hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
