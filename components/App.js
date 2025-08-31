import React, { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from 'react-three-fiber'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

function TheModel(props) {
    let mixer = null
    const { scene, animations } = useLoader(GLTFLoader, '/Demo_stuff/O2.glb')
        // console.log(scene);
    mixer = new THREE.AnimationMixer(scene)
    void mixer.clipAction(animations[0]).play()
    void mixer.clipAction(animations[1]).play()
    useFrame((state, delta) => {
        mixer.update(delta)
            // console.log(ca);
    })
    return <primitive object = { scene }
    position = {
        [0, 0, 0] }
    />
}

export default function App() {
    return ( <
        >
        <
        Canvas camera = {
            { position: [0, 0, 5] } } >
        <
        ambientLight intensity = { 2 }
        /> <
        pointLight position = {
            [40, 40, 40] }
        /> <
        Suspense fallback = { null } >
        <
        TheModel / >
        <
        /Suspense> <
        /Canvas> <
        />
    )
}