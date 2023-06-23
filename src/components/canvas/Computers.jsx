import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState([]);

  // This updates the scale and position based on the window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 500) {
        setScale(.7);
        setPosition([0, 0.1, -1.1]);
      } else if (width <= 768) {
        setScale(0.35);
        setPosition([0, 0.1, -0.55]);
      } else if (width <= 1024) {
        setScale(0.45);
        setPosition([0, -0.56, -0.75]);
      } else {
        setScale(0.55);
        setPosition([0, -1, -0.9]);
      }
    };

    // Initial setup
    handleResize();

    // Update on resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' /> 
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // This updates the isMobile variable state
  useEffect(() => {
    // Add an even listener that updates the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Callback function to handle media query changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Because we are using react we need to remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: isMobile ? 35 : 12 }}
      gl={{ preserveDrawingBuffer: true }}
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
