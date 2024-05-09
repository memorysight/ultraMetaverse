import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


// const Virus1 = () =>{
//   const model = useLoader(GLTFLoader, "./textures/Virus.glb");

//   model.scene.traverse((object) => {
//     if(object.isMesh){
//       object.castShadow = true;
//     }
//   });
//   return <primitive object={model.scene} />
// };


const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    console.log("Hi");
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
