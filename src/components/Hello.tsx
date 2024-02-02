"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hello = () => {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1]} />
        <meshStandardMaterial color={"cyan"} />
      </mesh>
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls />
    </Canvas>
  );
};

export default Hello;
