import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const getModelPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path.startsWith('./') ? path.slice(2) : path;
  return `${cleanBase}${cleanPath}`;
};

const Earth = () => {
  const earth = useGLTF(getModelPath('planet/scene.gltf'));

  return (
    <primitive object={earth.scene} scale={2.3} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <ErrorBoundary fallback={null}>
      <Canvas
        shadows
        frameloop='demand'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />

          <Preload all />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;