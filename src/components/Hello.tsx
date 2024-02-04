"use client";

import { Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hello = () => {
  return (
    <Canvas camera={{ position: [8, 8, 8], fov: 30 }}>
      <mesh rotation-x={Math.PI / 2} position={[1, 1, 1]}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"#f0f0f0"} />
      </mesh>
      <directionalLight position={[1, 2, 3]} />
      <OrbitControls />
      <Grid infiniteGrid fadeDistance={50} fadeStrength={5} />
    </Canvas>
  );
};

export default Hello;
