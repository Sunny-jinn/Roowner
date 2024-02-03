"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hello = () => {
  return (
    <Canvas>
      <mesh>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={"#f0f0f0"} />
      </mesh>
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Hello;
