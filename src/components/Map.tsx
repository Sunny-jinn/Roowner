"use client";

import { Environment, Grid, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Map = () => {
  return (
    <Canvas camera={{ position: [8, 8, 8] }}>
      <color attach="background" args={["#ececec"]} />

      <mesh rotation-x={-Math.PI / 2}>
        <planeGeometry args={[5, 5]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <Environment preset="sunset" />

      <OrbitControls />
      <Grid infiniteGrid fadeDistance={50} fadeStrength={5} />
    </Canvas>
  );
};

export default Map;
