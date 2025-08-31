import { useEffect } from 'react'
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import TwoDigitalNumber from './twoDigitalNumber'
// import DigitalClock from "./clock";

const DigitalClockPage = () => {
  useEffect(() => {
    const scene = new Scene()
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const hoursClock = new TwoDigitalNumber()
    const minutesClock = new TwoDigitalNumber()
    const secondsClock = new TwoDigitalNumber()

    hoursClock.group.position.set(-7, 0, 0)
    minutesClock.group.position.set(0, 0, 0)
    secondsClock.group.position.set(7, 0, 0)

    scene.add(hoursClock.group)
    scene.add(minutesClock.group)
    scene.add(secondsClock.group)

    camera.position.z = 10

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    const updateClock = () => {
      const date = new Date()
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      console.log('Updating clock:', { hours, minutes, seconds })

      hoursClock.update(hours)
      minutesClock.update(minutes)
      secondsClock.update(seconds)
    }

    setInterval(updateClock, 1000)
  }, [])

  return null
}

export default DigitalClockPage

// import React, { useEffect, useRef } from "react";
// import {
//   Scene,
//   Color,
//   Mesh,
//   MeshNormalMaterial,
//   BoxBufferGeometry,
//   PerspectiveCamera,
//   WebGLRenderer,
//   OrthographicCamera
// } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Stats from "stats.js";
// // import DigitalClock from "./clock";
// import Main from "./clock";

// const ThreeScene = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const main = new Main();
//     mountRef.current.appendChild(main.renderer.domElement);

//     const handleResize = () => {
//       main.onResize();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       mountRef.current.removeChild(main.renderer.domElement);
//       main.controls.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
// };

// export default ThreeScene;
