import React from 'react'
import { RoundedBox } from '@react-three/drei'

export default function Experience() {
  return (
    <>
      <group>
        {/* <OrbitControls/> */}
        {/* <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"}/> */}
        {/* <RigidBody colliders={false} type="fixed" position-y={1}> */}
        {/* <CylinderCollider args={[0.5, 28]}/> */}
        <RoundedBox
          // receiveShadow
          args={[20, 1, 16]} // Width, height, depth. Default is [1, 1, 1]
          radius={0.1} // Radius of the rounded corners. Default is 0.05
          smoothness={4} // The number of curve segments. Default is 4
          bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
          creaseAngle={0.4} // Smooth normals everywhere except faces that meet at an angle greater than the crease angle
          // {...meshProps} // All THREE.Mesh props are valid
          position={[0, -6.3, 0]}
        >
          <meshStandardMaterial color="rgb(245, 241, 215)" />
        </RoundedBox>
        {/* </RigidBody> */}
      </group>
    </>
  )
}
