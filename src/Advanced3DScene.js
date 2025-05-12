// src/Advanced3DScene.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';

function Box() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Advanced3DScene() {
  return (
    <div style={{ width: 600, height: 400 }}>
      <h2>3D Scene Visualization</h2>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}
