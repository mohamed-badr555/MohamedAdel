import React, { Suspense, useEffect, useState } from "react";
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

const Computers = ({ isMobile }) => {
  const computer = useGLTF(getModelPath('desktop_pc/scene.gltf'));

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 512 : 1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile 
          ? [0, -3, -2.2] 
          : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 1000px)");

    setIsMobile(mobileQuery.matches);
    setIsSmallScreen(tabletQuery.matches);

    const handleMobileChange = (event) => setIsMobile(event.matches);
    const handleTabletChange = (event) => setIsSmallScreen(event.matches);

    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Skip heavy 3D canvas on mobile
  if (isMobile) {
    return null;
  }

  return (
    <ErrorBoundary fallback={null}>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ 
          position: [20, 3, 5], 
          fov: isSmallScreen ? 25 : 22 
        }}
        gl={{ 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={false} />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;