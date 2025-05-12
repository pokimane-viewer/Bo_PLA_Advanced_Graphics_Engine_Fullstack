// src/Advanced3DScene.js
// Example of a separate advanced 3D visualization component using three and react-three-fiber

import React from 'react';
import { Canvas } from '@react-three/fiber';

function Box() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function Advanced3DScene() {
  return (
    <div style={{ width: '600px', height: '400px' }}>
      <h2>3D Scene Visualization</h2>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
}
