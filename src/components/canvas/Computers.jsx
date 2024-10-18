/* eslint-disable react/no-unknown-property */
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
// import { Suspense, useEffect, useState } from 'react'
// import CanvasLoader from '../Loader'



// const Computers = ({ isMobile }) => {
//   const computer = useGLTF('./desktop_pc/scene.gltf')
//   if (!computer) return <CanvasLoader />; // Fallback if loading fails

//   return (
//     <mesh>
//       <hemisphereLight intensity={4} groundColor="black" />
//       <pointLight intensity={1} />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.65 : 0.75}
//         position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   )
// }




// const ComputerCanvas = () => {
//   const [isMobile, setIsMobile] = useState(false)
//   useEffect(() => {
//     //Add a Listner for changes to the screen
//     const mediaQuery = window.matchMedia('(max-width:500px)');
//     //set initial value of isMobile
//     setIsMobile(mediaQuery.matches);
//     //define a callback func to handle changes to the media querry
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches)
//     }
//     // Add the callback function as a listner for changes to the media query
//     mediaQuery.addEventListener('change', handleMediaQueryChange)
//     //Remove the listner when the component is unmounted
//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange);
//     }
//   }, [])

//   return (
//     <Canvas
//       frameLoop='demand'
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />} >
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

// export default ComputerCanvas





//chatgpt code

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useState, useRef } from 'react';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  if (!computer) return <CanvasLoader />; // Fallback if loading fails

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.65 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Add a listener for screen changes
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Only load when 10% of the canvas is in view
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
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
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
      )}
    </div>
  );
};

export default ComputerCanvas;
