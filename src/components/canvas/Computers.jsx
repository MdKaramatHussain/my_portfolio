/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
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
        scale={ 0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// const Computers = ({ isMobile }) => {
//   let computer = null
//   try {
//     computer = useGLTF('./desktop_pc/scene.gltf')
//   } catch (error) {
//     console.error("Error loading GLTF model:", error)
//   }
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


const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    //Add a Listner for changes to the screen
    const mediaQuery = window.matchMedia('(max-width:500px)');
    //set initial value of isMobile
    setIsMobile(mediaQuery.matches);
    //define a callback func to handle changes to the media querry
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    // Add the callback function as a listner for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    //Remove the listner when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    <Canvas
      frameLoop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas