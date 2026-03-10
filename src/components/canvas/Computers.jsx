import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

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
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Add listeners for different screen sizes
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 1000px)");

    // Set the initial values
    setIsMobile(mobileQuery.matches);
    setIsSmallScreen(tabletQuery.matches);

    // Define callback functions for changes
    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };
    
    const handleTabletChange = (event) => {
      setIsSmallScreen(event.matches);
    };

    // Add the listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setHasError(true);
      }
    } catch (e) {
      setHasError(true);
    }

    // Cleanup
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  // Fallback if WebGL is not supported or canvas fails
  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center p-8">
          <h3 className="text-white text-xl font-bold">💻</h3>
        </div>
      </div>
    );
  }

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}
      dpr={isMobile ? [1, 1] : [1, 2]}
      camera={{ 
        position: [20, 3, 5], 
        fov: isMobile ? 35 : isSmallScreen ? 25 : 22 
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
        antialias: !isMobile,
        failIfMajorPerformanceCaveat: false,
      }}
      style={{ background: 'transparent' }}
      onError={() => setHasError(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;