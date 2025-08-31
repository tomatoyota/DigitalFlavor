// import React, { useRef, Suspense, useEffect } from 'react'
// import { ReactDOM } from 'react-dom'
// import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei'
// import {
//   Canvas,
//   useLoader,
//   useFrame,
//   useThree,
//   extend,
// } from '@react-three/fiber'
// import { Physics } from '@react-three/rapier'
// import { Sky, RoundedBox } from '@react-three/drei'
// import _JSXStyle from 'styled-jsx/style'
// import { LayerMaterial, Depth, Noise, Base } from 'lamina'
// import { Model } from './building'
// import Experience from './Experience'
// // import DigitalClockPage from '@/components/combine';
// import { folder, useControls } from 'leva'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
// import * as THREE from 'three'

// import { Group, Scene, PerspectiveCamera, WebGLRenderer } from 'three'
// import TwoDigitalNumber from './twoDigitalNumber'

// const BG_SPEED = 0.1
// const Background = () => {
//   const ref = useRef()

//   useFrame((_state, delta) => {
//     ref.current.rotation.x =
//       ref.current.rotation.y =
//       ref.current.rotation.z +=
//         delta * BG_SPEED
//   })

//   return (
//     <mesh scale={50} ref={ref}>
//       <sphereGeometry args={[1, 64, 64]} />
//       {/* <boxGeometry /> */}
//       <LayerMaterial side={THREE.BackSide}>
//         {/* <Base color="#deba71" alpha={1} mode="normal" /> */}
//         <Depth
//           colarA="#deba71"
//           colorB="#0081fc"
//           alpha={1}
//           mode="multiply"
//           near={120}
//           far={200}
//           origin={[100, 100, -100]}
//         />
//         {/* #4a80c0
//         #fcf0db */}
//         <Noise
//           mapping="local"
//           type="white"
//           scale={100}
//           colorA="white"
//           colorB="black"
//           mode="subtract"
//           alpha={0.42}
//         />
//       </LayerMaterial>
//     </mesh>
//   )
// }

// function TheModel({ url }) {
//   const gltf = useLoader(GLTFLoader, url, (loader) => {
//     const dracoLoader = new DRACOLoader()
//     dracoLoader.setDecoderPath('/draco-gltf/') // 設置DRACO解碼器的路徑
//     loader.setDRACOLoader(dracoLoader)
//   })

//   const { scene, animations } = gltf
//   const mixer = new THREE.AnimationMixer(scene)

//   useEffect(() => {
//     if (animations && animations.length > 0) {
//       const actions = animations.map((animation) => mixer.clipAction(animation))
//       actions.forEach((action) => action.play())

//       return () => actions.forEach((action) => action.stop())
//     }
//   }, [animations, mixer])

//   useFrame((state, delta) => {
//     mixer.update(delta)
//   })

//   return <primitive object={scene} position={[0, 0, 0]} />
// }

// export default function TestG() {
//   return (
//     <>
//       <div className="h-dvh w-full overflow-hidden">
//         <Canvas shadows camera={{ position: [18, 7, 18], fov: 38 }}>
//           {/* <Sky sunPosition={[100, 20, 100]} /> */}
//           <PresentationControls
//             // snap global zoom={0.8}
//             rotation={[0, -Math.PI / 80, 0]}
//             polar={[0, Math.PI / 4]}
//             azimuth={[-Math.PI / 2, Math.PI / 2]}
//           >
//             <ambientLight intensity={2} castShadow />
//             {/* <pointLight position={[40, 40, 40]} /> */}
//             <Suspense fallback={null}>
//               <Physics>
//                 <Experience />
//               {/* <DigitalClockPage/> */}
//               </Physics>
//               <TheModel url="/Demo_stuff/buildingO2.glb" position={[0, 2, 0]} />
//               <directionalLight
//                 position={[2.3, 3.0, 5.4]}
//                 intensity={2}
//                 castShadow
//               />
//               {/* <ambientLight intensity={1} castShadow /> */}
//               <Background />
//             </Suspense>
//           </PresentationControls>
//         </Canvas>
//       </div>
//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//         }
//         .webgl {
//           position: fixed;
//           top: 0;
//           left: 0;
//           outline: none;
//         }
//       `}</style>
//     </>
//   )
// }

import React, { useRef, Suspense, useEffect, useState } from 'react'
import { ReactDOM } from 'react-dom'
import { OrbitControls, useGLTF, PresentationControls } from '@react-three/drei'
import {
  Canvas,
  useLoader,
  useFrame,
  useThree,
  extend,
} from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Sky, RoundedBox } from '@react-three/drei'
import _JSXStyle from 'styled-jsx/style'
import { LayerMaterial, Depth, Noise, Base } from 'lamina'
import { Model } from './building'
import Experience from './Experience'
import { folder, useControls } from 'leva'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from 'three'
import { Group, Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import TwoDigitalNumber from './twoDigitalNumber'
import { XR, XRButton } from '@react-three/xr'

// 定義背景動畫速度
const BG_SPEED = 0.1

// 定義背景元件
const Background = () => {
  const ref = useRef()

  useFrame((_state, delta) => {
    ref.current.rotation.x =
      ref.current.rotation.y =
      ref.current.rotation.z +=
        delta * BG_SPEED
  })

  return (
    <mesh scale={50} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colarA="#deba71"
          colorB="#0081fc"
          alpha={1}
          mode="multiply"
          near={120}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={100}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.42}
        />
      </LayerMaterial>
    </mesh>
  )
}

// 定義GLTF模型元件
function TheModel({ url }) {
  const gltf = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  const { scene, animations } = gltf
  const mixer = new THREE.AnimationMixer(scene)

  useEffect(() => {
    if (animations && animations.length > 0) {
      const actions = animations.map((animation) => mixer.clipAction(animation))
      actions.forEach((action) => action.play())

      return () => actions.forEach((action) => action.stop())
    }
  }, [animations])

  useFrame((state, delta) => {
    mixer.update(delta)
  })

  return <primitive object={scene} position={[0, 0, 0]} />
}

// 定義數字時鐘元件
const DigitalClock = () => {
  const hoursClockRef = useRef()
  const minutesClockRef = useRef()
  const secondsClockRef = useRef()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const hoursClock = new TwoDigitalNumber()
    const minutesClock = new TwoDigitalNumber()
    const secondsClock = new TwoDigitalNumber()

    // hoursClock.group.position.set(-7, -0.7, 1.2);
    // minutesClock.group.position.set(0, -0.7, 1.2);
    // secondsClock.group.position.set(7, -0.7, 1.2);

    hoursClock.group.position.set(-5, 0.5, 1.2)
    minutesClock.group.position.set(5, 0.5, 1.2)
    secondsClock.group.position.set(0, -0.7, 1.2)

    hoursClock.group.scale.set(0.6, 0.6, 0.6)
    minutesClock.group.scale.set(0.6, 0.6, 0.6)
    secondsClock.group.scale.set(0.3, 0.3, 0.3)

    hoursClockRef.current = hoursClock
    minutesClockRef.current = minutesClock
    secondsClockRef.current = secondsClock

    setInitialized(true)
  }, [])

  useFrame(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    if (
      hoursClockRef.current &&
      minutesClockRef.current &&
      secondsClockRef.current
    ) {
      hoursClockRef.current.update(hours)
      minutesClockRef.current.update(minutes)
      secondsClockRef.current.update(seconds)
    }
  })

  if (!initialized) {
    return null // 未初始化时不渲染任何内容
  }

  return (
    <>
      {hoursClockRef.current && (
        <primitive object={hoursClockRef.current.group} />
      )}
      {minutesClockRef.current && (
        <primitive object={minutesClockRef.current.group} />
      )}
      {secondsClockRef.current && (
        <primitive object={secondsClockRef.current.group} />
      )}
    </>
  )
}

// 定義測試頁面元件
export default function TestG() {
  return (
    <>
      <div className="h-dvh w-full overflow-hidden">
        <Canvas shadows camera={{ position: [18, 6, 18], fov: 38 }}>
          <PresentationControls
            rotation={[0, -Math.PI / 80, 0]}
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 2, Math.PI / 2]}
          >
            <ambientLight intensity={2}/>
            <Suspense fallback={null}>
              <Physics>
                <Experience />
              </Physics>
              {/* <XR> */}
        {/* <XRButton /> */}
              <TheModel url="/Demo_stuff/buildingO2.glb" position={[0, 2, 0]} />
              {/* </XR> */}
              <directionalLight
                position={[2.3, 3.0, 5.4]}
                intensity={2}
                castShadow
              />
              <Background />
              <DigitalClock />
            </Suspense>
          </PresentationControls>
        </Canvas>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
        }
        .webgl {
          position: fixed;
          top: 0;
          left: 0;
          outline: none;
        }
      `}</style>
    </>
  )
}
