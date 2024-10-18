// /* eslint-disable react/no-unknown-property */
// import { OrbitControls,  useGLTF } from "@react-three/drei"
// import { Canvas } from "@react-three/fiber"
// import { Suspense } from "react"
// import CanvasLoader from "../Loader"


// const Earth = () => {
//   const earth = useGLTF('./planet/scene.gltf')
//   return (
//     <primitive
//       object={earth.scene}
//       scale={2.5}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// }

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6]
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate={true}
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />

//         <Earth />
//       </Suspense>
      
//     </Canvas>
//   )
// }

// export default EarthCanvas



/* eslint-disable react/no-unknown-property */
//chatgpt code
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set to true when in view, false when out of view
      },
      { threshold: 0.1 } // Trigger loading when 10% of the canvas is visible
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);

  return (
    <div ref={canvasRef} style={{ width: '100%', height: '100%' }}>
      {isVisible && (
        <Canvas
          shadows
          frameloop="demand"
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6]
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate={true}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;
