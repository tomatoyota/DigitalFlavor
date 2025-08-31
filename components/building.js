import React from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Demo_stuff/buildingO2.glb')
  return (
    <group {...props} dispose={null} castShadow receiveShadow>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.mix}
        position={[5.517, -4.176, 2.86]}
        scale={[0.57, 1, 1.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.mix}
        position={[-5.517, -4.176, -2.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.57, 1, 1.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials.mix}
        position={[5.517, -4.176, -2.86]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.57, 1, 1.487]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.mix}
        position={[-5.517, -4.176, 2.86]}
        scale={[0.57, 1, 1.487]}
      />
      <PerspectiveCamera
        makeDefault={false}
        far={100}
        near={0.1}
        fov={22.895}
        position={[22.471, 0.211, 33.631]}
        rotation={[0, 0.583, 0]}
      />
      <group
        position={[0, -0.75, 1.012]}
        rotation={[1.571, -1.527, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_0.geometry}
          material={materials.metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_1.geometry}
          material={materials.metal}
          rotation={[0, -Math.PI / 6, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_10.geometry}
          material={materials.metal}
          rotation={[0, Math.PI / 3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_11.geometry}
          material={materials.metal}
          rotation={[0, Math.PI / 6, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_2.geometry}
          material={materials.metal}
          rotation={[0, -Math.PI / 3, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_3.geometry}
          material={materials.metal}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_4.geometry}
          material={materials.metal}
          rotation={[Math.PI, -Math.PI / 3, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_5.geometry}
          material={materials.metal}
          rotation={[Math.PI, -Math.PI / 6, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_6.geometry}
          material={materials.metal}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_7.geometry}
          material={materials.metal}
          rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_8.geometry}
          material={materials.metal}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_9.geometry}
          material={materials.metal}
          rotation={[0, 1.571, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Extrude_4.geometry}
        material={materials.metal}
        position={[0, -0.75, 1.42]}
        scale={0}
      />
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.orang}
          position={[-551.885, 419.266, 285]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_16.geometry}
          material={nodes.Cube_16.material}
          position={[-551.885, 445.263, 94]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.orang}
          position={[-551.885, 572.96, -284.22]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_26.geometry}
          material={nodes.Cube_26.material}
          position={[-551.885, 445.263, -94]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_28.geometry}
          material={materials.orang}
          position={[-551.885, 419.266, -284.22]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_2.geometry}
          material={materials.orang}
          position={[-551.885, 572.96, 285]}
          rotation={[0, -1.571, 0]}
        />
        <group
          position={[-551.922, 394.284, 421.195]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh106.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh106_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[-551.922, 394.284, -421.195]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh112.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh112_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3_3.geometry}
          material={materials.purple}
          position={[-540, 419.391, 0]}
        />
        <group rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.L樓梯R扶手.geometry}
            material={materials.peach}
            position={[-40, 575.018, 616.953]}
            rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.L樓梯R扶手_1.geometry}
            material={materials.peach}
            position={[31.762, 575.018, 616.953]}
            rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.扶手L.geometry}
            material={materials.peach}
            position={[35.004, 504.172, 525.142]}
            rotation={[Math.PI, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.扶手R.geometry}
            material={materials.peach}
            position={[-35, 504.172, 525.142]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude.geometry}
          material={materials.yello01}
          position={[-622.14, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1.geometry}
          material={materials.yello01}
          position={[-595.507, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_10.geometry}
          material={materials.yello01}
          position={[-502.291, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_10_2.geometry}
          material={nodes.Extrude_10_2.material}
          position={[-473.361, 387.688, -143.195]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_11.geometry}
          material={materials.yello01}
          position={[-635.457, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_12.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -128.895]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_13.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -114.595]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_14.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 85.995]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_15.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 71.695]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_16.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 57.395]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_17.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 114.595]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_18.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 100.295]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_19.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 128.895]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1_2.geometry}
          material={materials.yello01}
          position={[-534.071, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2.geometry}
          material={materials.yello01}
          position={[-608.824, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_20.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 143.195]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_21.geometry}
          material={materials.yello01}
          position={[-475.666, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_22.geometry}
          material={materials.yello01}
          position={[-490.268, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_23.geometry}
          material={materials.yello01}
          position={[-519.47, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_24.geometry}
          material={materials.yello01}
          position={[-504.869, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_25.geometry}
          material={materials.yello01}
          position={[-534.071, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_26.geometry}
          material={materials.yello01}
          position={[-548.673, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_27.geometry}
          material={materials.yello01}
          position={[-502.291, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_28.geometry}
          material={materials.yello01}
          position={[-661.824, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_29.geometry}
          material={materials.yello01}
          position={[-515.607, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_2.geometry}
          material={materials.yello01}
          position={[-504.869, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_3.geometry}
          material={materials.yello01}
          position={[-548.673, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3.geometry}
          material={materials.yello01}
          position={[-555.557, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_30.geometry}
          material={materials.yello01}
          position={[-528.924, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_31.geometry}
          material={materials.yello01}
          position={[-582.19, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_32.geometry}
          material={materials.yello01}
          position={[-568.874, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_33.geometry}
          material={materials.yello01}
          position={[-542.24, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_34.geometry}
          material={materials.yello01}
          position={[-555.557, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_35.geometry}
          material={materials.yello01}
          position={[-608.824, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_36.geometry}
          material={materials.yello01}
          position={[-595.507, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_37.geometry}
          material={materials.yello01}
          position={[-622.14, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_38.geometry}
          material={materials.yello01}
          position={[-635.457, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_39.geometry}
          material={materials.yello01}
          position={[-648.507, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3_2.geometry}
          material={materials.yello01}
          position={[-519.47, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_42.geometry}
          material={materials.yello01}
          position={[-661.824, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_43.geometry}
          material={materials.yello01}
          position={[-648.507, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_2_2.geometry}
          material={materials.yello01}
          position={[-542.24, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_3_2.geometry}
          material={materials.yello01}
          position={[-490.268, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5.geometry}
          material={materials.yello01}
          position={[-568.874, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5_2.geometry}
          material={materials.yello01}
          position={[-475.666, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_6.geometry}
          material={materials.yello01}
          position={[-582.19, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_6_2.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -57.395]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7.geometry}
          material={materials.yello01}
          position={[-528.924, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7_2.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -71.695]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8.geometry}
          material={materials.yello01}
          position={[-515.607, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8_2.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -100.295]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_9.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -85.995]}
          rotation={[0, -1.571, 0]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10.geometry}
          material={materials.pink}
          position={[-262.596, 34, 328.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11.geometry}
          material={materials.pink}
          position={[-262.596, 34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_12.geometry}
          material={materials.pink}
          position={[-262.596, -34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_13.geometry}
          material={materials.pink}
          position={[-262.596, -34, 328.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_14.geometry}
          material={materials.pink}
          position={[-205.696, -34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_15.geometry}
          material={materials.pink}
          position={[-205.696, -34, 328.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_16_2.geometry}
          material={materials.pink}
          position={[-205.696, -34, 291.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_17.geometry}
          material={materials.pink}
          position={[-205.696, -34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_18.geometry}
          material={materials.pink}
          position={[-262.596, -34, 291.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_19.geometry}
          material={materials.pink}
          position={[-262.596, -34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3_2.geometry}
          material={materials.pink}
          position={[-262.596, 34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5_2.geometry}
          material={materials.pink}
          position={[-262.596, 34, 291.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6.geometry}
          material={materials.pink}
          position={[-205.696, 34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7.geometry}
          material={materials.pink}
          position={[-205.696, 34, 291.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8.geometry}
          material={materials.pink}
          position={[-205.696, 34, 328.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9.geometry}
          material={materials.pink}
          position={[-205.696, 34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10_2.geometry}
          material={materials.pink}
          position={[-262.596, 34, 328.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11_2.geometry}
          material={materials.pink}
          position={[-262.596, 34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_12_2.geometry}
          material={materials.pink}
          position={[-262.596, -34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_13_2.geometry}
          material={materials.pink}
          position={[-262.596, -34, 328.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_14_2.geometry}
          material={materials.pink}
          position={[-205.696, -34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_15_2.geometry}
          material={materials.pink}
          position={[-205.696, -34, 328.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_16_3.geometry}
          material={materials.pink}
          position={[-205.696, -34, 291.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_17_2.geometry}
          material={materials.pink}
          position={[-205.696, -34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_18_2.geometry}
          material={materials.pink}
          position={[-262.596, -34, 291.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_19_2.geometry}
          material={materials.pink}
          position={[-262.596, -34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4_2.geometry}
          material={materials.pink}
          position={[-262.596, 34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5_3.geometry}
          material={materials.pink}
          position={[-262.596, 34, 291.14]}
          rotation={[Math.PI, -Math.PI / 9, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6_2.geometry}
          material={materials.pink}
          position={[-205.696, 34, 291.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7_2.geometry}
          material={materials.pink}
          position={[-205.696, 34, 291.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8_2.geometry}
          material={materials.pink}
          position={[-205.696, 34, 328.14]}
          rotation={[0, Math.PI / 9, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9_2.geometry}
          material={materials.pink}
          position={[-205.696, 34, 328.14]}
          rotation={[0, -Math.PI / 9, -Math.PI / 2]}
        />
      </group>
      <group
        position={[0, -0.75, 0]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={0.01}
      >
        <group position={[136.047, 0, 0]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293.geometry}
            material={materials.E6E6E6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293_1.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293_2.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293_3.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293_4.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh293_5.geometry}
            material={materials.butter}
          />
        </group>
        <group position={[0, -75.029, 0]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_10_2.geometry}
            material={materials['dark kaki']}
            position={[-188.266, -100.526, -99.705]}
            rotation={[-Math.PI / 2, 0.802, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_11_2.geometry}
            material={materials['dark kaki']}
            position={[-213.994, -68.267, -99.705]}
            rotation={[-Math.PI / 2, 0.976, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_12_2.geometry}
            material={materials['dark kaki']}
            position={[-248.558, 10.493, -99.546]}
            rotation={[-1.571, 1.325, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_13_2.geometry}
            material={materials['dark kaki']}
            position={[-234.283, -30.892, -99.705]}
            rotation={[-Math.PI / 2, 1.151, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_14_2.geometry}
            material={materials['dark kaki']}
            position={[-122.188, -151.127, -99.705]}
            rotation={[-Math.PI / 2, 0.502, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_15_2.geometry}
            material={materials['dark kaki']}
            position={[-157.203, -128.554, -99.705]}
            rotation={[-Math.PI / 2, 0.645, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_16_2.geometry}
            material={materials['dark kaki']}
            position={[-84.011, -167.793, -99.705]}
            rotation={[-Math.PI / 2, Math.PI / 9, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_17_2.geometry}
            material={materials['dark kaki']}
            position={[-43.819, -178.876, -99.705]}
            rotation={[-Math.PI / 2, 0.175, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_18_2.geometry}
            material={materials['dark kaki']}
            position={[-256.053, 51.862, -172.816]}
            rotation={[-1.571, 1.474, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_19_2.geometry}
            material={materials['dark kaki']}
            position={[-248.732, 9.105, -172.816]}
            rotation={[-Math.PI / 2, 1.314, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_1_2.geometry}
            material={materials['dark kaki']}
            position={[-248.732, 140.089, -99.705]}
            rotation={[Math.PI / 2, 1.314, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_20_2.geometry}
            material={materials['dark kaki']}
            position={[-214.189, -67.754, -172.816]}
            rotation={[-Math.PI / 2, 0.985, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_21_2.geometry}
            material={materials['dark kaki']}
            position={[-234.364, -31.238, -172.816]}
            rotation={[-Math.PI / 2, 1.146, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_22_2.geometry}
            material={materials['dark kaki']}
            position={[-123.255, -151.489, -172.816]}
            rotation={[-Math.PI / 2, 0.498, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_23_2.geometry}
            material={materials['dark kaki']}
            position={[-85.399, -168.354, -172.816]}
            rotation={[-Math.PI / 2, 0.323, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_24_2.geometry}
            material={materials['dark kaki']}
            position={[-158.061, -128.833, -172.816]}
            rotation={[-Math.PI / 2, 0.672, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_25_2.geometry}
            material={materials['dark kaki']}
            position={[-188.623, -100.384, -172.816]}
            rotation={[-Math.PI / 2, 0.832, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_26_2.geometry}
            material={materials['dark kaki']}
            position={[-45.258, -178.876, -172.816]}
            rotation={[-Math.PI / 2, 0.177, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_27_2.geometry}
            material={materials['dark kaki']}
            position={[-255.933, 95.822, -172.965]}
            rotation={[1.571, 1.471, -3.142]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_28_2.geometry}
            material={materials['dark kaki']}
            position={[-188.266, 249.721, -172.816]}
            rotation={[Math.PI / 2, 0.802, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_29_2.geometry}
            material={materials['dark kaki']}
            position={[-213.994, 217.462, -172.816]}
            rotation={[Math.PI / 2, 0.976, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_2_2.geometry}
            material={materials['dark kaki']}
            position={[-256.053, 97.333, -99.705]}
            rotation={[1.571, 1.474, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_2_3.geometry}
            material={materials['dark kaki']}
            position={[-214.189, 216.949, -99.705]}
            rotation={[Math.PI / 2, 0.985, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_30_2.geometry}
            material={materials['dark kaki']}
            position={[-248.558, 138.702, -172.975]}
            rotation={[1.571, 1.325, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_31_2.geometry}
            material={materials['dark kaki']}
            position={[-234.283, 180.086, -172.816]}
            rotation={[Math.PI / 2, 1.151, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_32_2.geometry}
            material={materials['dark kaki']}
            position={[-122.188, 300.322, -172.816]}
            rotation={[Math.PI / 2, 0.502, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_33_2.geometry}
            material={materials['dark kaki']}
            position={[-157.203, 277.749, -172.816]}
            rotation={[Math.PI / 2, 0.645, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_34_2.geometry}
            material={materials['dark kaki']}
            position={[-84.011, 316.988, -172.816]}
            rotation={[Math.PI / 2, Math.PI / 9, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_35_2.geometry}
            material={materials['dark kaki']}
            position={[-43.819, 328.07, -172.816]}
            rotation={[Math.PI / 2, 0.175, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_3_2.geometry}
            material={materials['dark kaki']}
            position={[-234.364, 180.433, -99.705]}
            rotation={[Math.PI / 2, 1.146, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_4_2.geometry}
            material={materials['dark kaki']}
            position={[-123.255, 300.684, -99.705]}
            rotation={[Math.PI / 2, 0.498, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_5_2.geometry}
            material={materials['dark kaki']}
            position={[-85.399, 317.549, -99.705]}
            rotation={[Math.PI / 2, 0.323, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_6_2.geometry}
            material={materials['dark kaki']}
            position={[-158.061, 278.028, -99.705]}
            rotation={[Math.PI / 2, 0.672, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_7_2.geometry}
            material={materials['dark kaki']}
            position={[-188.624, 249.579, -99.705]}
            rotation={[Math.PI / 2, 0.832, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_8_2.geometry}
            material={materials['dark kaki']}
            position={[-45.258, 328.07, -99.705]}
            rotation={[Math.PI / 2, 0.177, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_9_2.geometry}
            material={materials['dark kaki']}
            position={[-255.933, 53.373, -99.556]}
            rotation={[-Math.PI / 2, 1.471, Math.PI]}
          />
        </group>
        <group position={[0, -75.029, 0]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1.geometry}
            material={materials['dark kaki']}
            position={[84.011, -167.793, -172.816]}
            rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_1.geometry}
            material={materials['dark kaki']}
            position={[43.818, -178.876, -172.816]}
            rotation={[-Math.PI / 2, -0.175, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_10.geometry}
            material={materials['dark kaki']}
            position={[158.061, 278.028, -172.816]}
            rotation={[Math.PI / 2, -0.672, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_11.geometry}
            material={materials['dark kaki']}
            position={[85.399, 317.549, -172.816]}
            rotation={[Math.PI / 2, -0.323, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_12.geometry}
            material={materials['dark kaki']}
            position={[123.254, 300.684, -172.816]}
            rotation={[Math.PI / 2, -0.498, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_13.geometry}
            material={materials['dark kaki']}
            position={[234.364, 180.433, -172.816]}
            rotation={[Math.PI / 2, -1.146, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_14.geometry}
            material={materials['dark kaki']}
            position={[214.189, 216.949, -172.816]}
            rotation={[Math.PI / 2, -0.985, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_15.geometry}
            material={materials['dark kaki']}
            position={[255.933, 53.373, -172.965]}
            rotation={[-Math.PI / 2, -1.471, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_16.geometry}
            material={materials['dark kaki']}
            position={[248.732, 140.089, -172.816]}
            rotation={[Math.PI / 2, -1.314, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_17.geometry}
            material={materials['dark kaki']}
            position={[256.053, 97.333, -172.816]}
            rotation={[Math.PI / 2, -1.474, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_18.geometry}
            material={materials['dark kaki']}
            position={[256.053, 51.862, -99.705]}
            rotation={[-Math.PI / 2, -1.474, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_19.geometry}
            material={materials['dark kaki']}
            position={[248.732, 9.105, -99.705]}
            rotation={[-1.571, -1.314, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_2.geometry}
            material={materials['dark kaki']}
            position={[157.203, -128.554, -172.816]}
            rotation={[-Math.PI / 2, -0.645, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_20.geometry}
            material={materials['dark kaki']}
            position={[214.189, -67.754, -99.705]}
            rotation={[-Math.PI / 2, -0.985, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_21.geometry}
            material={materials['dark kaki']}
            position={[234.364, -31.238, -99.705]}
            rotation={[-Math.PI / 2, -1.146, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_22.geometry}
            material={materials['dark kaki']}
            position={[123.254, -151.489, -99.705]}
            rotation={[-Math.PI / 2, -0.498, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_23.geometry}
            material={materials['dark kaki']}
            position={[85.399, -168.354, -99.705]}
            rotation={[-Math.PI / 2, -0.323, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_24.geometry}
            material={materials['dark kaki']}
            position={[158.061, -128.833, -99.705]}
            rotation={[-Math.PI / 2, -0.672, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_25.geometry}
            material={materials['dark kaki']}
            position={[188.623, -100.384, -99.705]}
            rotation={[-Math.PI / 2, -0.832, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_26.geometry}
            material={materials['dark kaki']}
            position={[45.258, -178.876, -99.705]}
            rotation={[-Math.PI / 2, -0.177, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_27.geometry}
            material={materials['dark kaki']}
            position={[255.933, 95.822, -99.556]}
            rotation={[Math.PI / 2, -1.471, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_28.geometry}
            material={materials['dark kaki']}
            position={[188.265, 249.721, -99.705]}
            rotation={[Math.PI / 2, -0.802, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_29.geometry}
            material={materials['dark kaki']}
            position={[213.994, 217.462, -99.705]}
            rotation={[Math.PI / 2, -0.976, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_3.geometry}
            material={materials['dark kaki']}
            position={[122.188, -151.128, -172.816]}
            rotation={[-Math.PI / 2, -0.502, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_30.geometry}
            material={materials['dark kaki']}
            position={[248.558, 138.702, -99.546]}
            rotation={[Math.PI / 2, -1.325, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_31.geometry}
            material={materials['dark kaki']}
            position={[234.282, 180.086, -99.705]}
            rotation={[Math.PI / 2, -1.151, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_32.geometry}
            material={materials['dark kaki']}
            position={[122.188, 300.322, -99.705]}
            rotation={[Math.PI / 2, -0.502, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_33.geometry}
            material={materials['dark kaki']}
            position={[157.203, 277.749, -99.705]}
            rotation={[Math.PI / 2, -0.645, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_34.geometry}
            material={materials['dark kaki']}
            position={[84.011, 316.988, -99.705]}
            rotation={[Math.PI / 2, -Math.PI / 9, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_35.geometry}
            material={materials['dark kaki']}
            position={[43.818, 328.07, -99.705]}
            rotation={[Math.PI / 2, -0.175, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_4.geometry}
            material={materials['dark kaki']}
            position={[234.282, -30.892, -172.816]}
            rotation={[-Math.PI / 2, -1.151, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_5.geometry}
            material={materials['dark kaki']}
            position={[248.558, 10.493, -172.975]}
            rotation={[-Math.PI / 2, -1.325, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_6.geometry}
            material={materials['dark kaki']}
            position={[213.994, -68.267, -172.816]}
            rotation={[-Math.PI / 2, -0.976, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_7.geometry}
            material={materials['dark kaki']}
            position={[188.265, -100.526, -172.816]}
            rotation={[-Math.PI / 2, -0.802, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_8.geometry}
            material={materials['dark kaki']}
            position={[45.258, 328.07, -172.816]}
            rotation={[Math.PI / 2, -0.177, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_9.geometry}
            material={materials['dark kaki']}
            position={[188.623, 249.579, -172.816]}
            rotation={[Math.PI / 2, -0.832, Math.PI]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel_3.geometry}
          material={materials['pretty green']}
          position={[187.376, 0, 0]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel_4.geometry}
          material={materials['pretty green']}
          position={[187.376, 0, 0]}
          rotation={[Math.PI, -1.571, 0]}
        />
      </group>
      <group position={[0, -0.75, 0]} rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group position={[0, 0, -136.047]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294_1.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294_2.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294_3.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294_4.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh294_5.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group position={[0, -75.029, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_10_4.geometry}
            material={materials['dark kaki']}
            position={[158.061, 278.028, -172.816]}
            rotation={[Math.PI / 2, -0.672, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_11_4.geometry}
            material={materials['dark kaki']}
            position={[85.399, 317.549, -172.816]}
            rotation={[Math.PI / 2, -0.323, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_12_4.geometry}
            material={materials['dark kaki']}
            position={[123.254, 300.684, -172.816]}
            rotation={[Math.PI / 2, -0.498, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_13_4.geometry}
            material={materials['dark kaki']}
            position={[234.364, 180.433, -172.816]}
            rotation={[Math.PI / 2, -1.146, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_14_4.geometry}
            material={materials['dark kaki']}
            position={[214.189, 216.949, -172.816]}
            rotation={[Math.PI / 2, -0.985, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_15_4.geometry}
            material={materials['dark kaki']}
            position={[255.933, 53.373, -172.965]}
            rotation={[-Math.PI / 2, -1.471, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_16_4.geometry}
            material={materials['dark kaki']}
            position={[248.732, 140.089, -172.816]}
            rotation={[Math.PI / 2, -1.314, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_17_4.geometry}
            material={materials['dark kaki']}
            position={[256.053, 97.333, -172.816]}
            rotation={[Math.PI / 2, -1.474, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_18_4.geometry}
            material={materials['dark kaki']}
            position={[256.053, 51.862, -99.705]}
            rotation={[-Math.PI / 2, -1.474, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_19_4.geometry}
            material={materials['dark kaki']}
            position={[248.732, 9.105, -99.705]}
            rotation={[-Math.PI / 2, -1.314, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_1_4.geometry}
            material={materials['dark kaki']}
            position={[43.818, -178.876, -172.816]}
            rotation={[-Math.PI / 2, -0.175, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_20_4.geometry}
            material={materials['dark kaki']}
            position={[214.189, -67.754, -99.705]}
            rotation={[-Math.PI / 2, -0.985, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_21_4.geometry}
            material={materials['dark kaki']}
            position={[234.364, -31.238, -99.705]}
            rotation={[-Math.PI / 2, -1.146, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_22_4.geometry}
            material={materials['dark kaki']}
            position={[123.254, -151.489, -99.705]}
            rotation={[-Math.PI / 2, -0.498, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_23_4.geometry}
            material={materials['dark kaki']}
            position={[85.399, -168.354, -99.705]}
            rotation={[-Math.PI / 2, -0.323, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_24_4.geometry}
            material={materials['dark kaki']}
            position={[158.061, -128.833, -99.705]}
            rotation={[-Math.PI / 2, -0.672, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_25_4.geometry}
            material={materials['dark kaki']}
            position={[188.623, -100.384, -99.705]}
            rotation={[-Math.PI / 2, -0.832, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_26_4.geometry}
            material={materials['dark kaki']}
            position={[45.258, -178.876, -99.705]}
            rotation={[-Math.PI / 2, -0.177, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_27_4.geometry}
            material={materials['dark kaki']}
            position={[255.933, 95.822, -99.556]}
            rotation={[Math.PI / 2, -1.471, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_28_4.geometry}
            material={materials['dark kaki']}
            position={[188.265, 249.721, -99.705]}
            rotation={[Math.PI / 2, -0.802, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_29_4.geometry}
            material={materials['dark kaki']}
            position={[213.994, 217.462, -99.705]}
            rotation={[Math.PI / 2, -0.976, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_2_5.geometry}
            material={materials['dark kaki']}
            position={[157.203, -128.554, -172.816]}
            rotation={[-Math.PI / 2, -0.645, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_30_4.geometry}
            material={materials['dark kaki']}
            position={[248.558, 138.702, -99.546]}
            rotation={[Math.PI / 2, -1.325, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_31_4.geometry}
            material={materials['dark kaki']}
            position={[234.282, 180.086, -99.705]}
            rotation={[Math.PI / 2, -1.151, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_32_4.geometry}
            material={materials['dark kaki']}
            position={[122.188, 300.322, -99.705]}
            rotation={[Math.PI / 2, -0.502, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_33_4.geometry}
            material={materials['dark kaki']}
            position={[157.203, 277.749, -99.705]}
            rotation={[Math.PI / 2, -0.645, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_34_4.geometry}
            material={materials['dark kaki']}
            position={[84.011, 316.988, -99.705]}
            rotation={[Math.PI / 2, -Math.PI / 9, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_35_4.geometry}
            material={materials['dark kaki']}
            position={[43.818, 328.07, -99.705]}
            rotation={[Math.PI / 2, -0.175, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_3_5.geometry}
            material={materials['dark kaki']}
            position={[122.188, -151.127, -172.816]}
            rotation={[-Math.PI / 2, -0.502, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_4_4.geometry}
            material={materials['dark kaki']}
            position={[234.282, -30.892, -172.816]}
            rotation={[-Math.PI / 2, -1.151, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_4_5.geometry}
            material={materials['dark kaki']}
            position={[84.011, -167.793, -172.816]}
            rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_5_4.geometry}
            material={materials['dark kaki']}
            position={[248.558, 10.493, -172.975]}
            rotation={[-Math.PI / 2, -1.325, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_6_4.geometry}
            material={materials['dark kaki']}
            position={[213.994, -68.267, -172.816]}
            rotation={[-Math.PI / 2, -0.976, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_7_4.geometry}
            material={materials['dark kaki']}
            position={[188.265, -100.526, -172.816]}
            rotation={[-Math.PI / 2, -0.802, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_8_4.geometry}
            material={materials['dark kaki']}
            position={[45.258, 328.07, -172.816]}
            rotation={[Math.PI / 2, -0.177, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_9_4.geometry}
            material={materials['dark kaki']}
            position={[188.623, 249.579, -172.816]}
            rotation={[Math.PI / 2, -0.832, -Math.PI]}
          />
        </group>
        <group position={[0, -75.029, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_10_3.geometry}
            material={materials['dark kaki']}
            position={[-188.266, -100.526, -99.705]}
            rotation={[-Math.PI / 2, 0.802, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_11_3.geometry}
            material={materials['dark kaki']}
            position={[-213.994, -68.267, -99.705]}
            rotation={[-Math.PI / 2, 0.976, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_12_3.geometry}
            material={materials['dark kaki']}
            position={[-248.558, 10.493, -99.546]}
            rotation={[-1.571, 1.325, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_13_3.geometry}
            material={materials['dark kaki']}
            position={[-234.283, -30.892, -99.705]}
            rotation={[-Math.PI / 2, 1.151, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_14_3.geometry}
            material={materials['dark kaki']}
            position={[-122.188, -151.127, -99.705]}
            rotation={[-Math.PI / 2, 0.502, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_15_3.geometry}
            material={materials['dark kaki']}
            position={[-157.203, -128.554, -99.705]}
            rotation={[-Math.PI / 2, 0.645, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_16_3.geometry}
            material={materials['dark kaki']}
            position={[-84.011, -167.793, -99.705]}
            rotation={[-Math.PI / 2, Math.PI / 9, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_17_3.geometry}
            material={materials['dark kaki']}
            position={[-43.819, -178.876, -99.705]}
            rotation={[-Math.PI / 2, 0.175, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_18_3.geometry}
            material={materials['dark kaki']}
            position={[-256.053, 51.862, -172.816]}
            rotation={[-1.571, 1.474, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_19_3.geometry}
            material={materials['dark kaki']}
            position={[-248.732, 9.105, -172.816]}
            rotation={[-Math.PI / 2, 1.314, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_1_3.geometry}
            material={materials['dark kaki']}
            position={[-248.732, 140.089, -99.705]}
            rotation={[Math.PI / 2, 1.314, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_20_3.geometry}
            material={materials['dark kaki']}
            position={[-214.189, -67.754, -172.816]}
            rotation={[-Math.PI / 2, 0.985, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_21_3.geometry}
            material={materials['dark kaki']}
            position={[-234.364, -31.238, -172.816]}
            rotation={[-Math.PI / 2, 1.146, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_22_3.geometry}
            material={materials['dark kaki']}
            position={[-123.255, -151.489, -172.816]}
            rotation={[-Math.PI / 2, 0.498, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_23_3.geometry}
            material={materials['dark kaki']}
            position={[-85.399, -168.354, -172.816]}
            rotation={[-Math.PI / 2, 0.323, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_24_3.geometry}
            material={materials['dark kaki']}
            position={[-158.061, -128.833, -172.816]}
            rotation={[-Math.PI / 2, 0.672, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_25_3.geometry}
            material={materials['dark kaki']}
            position={[-188.623, -100.384, -172.816]}
            rotation={[-Math.PI / 2, 0.832, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_26_3.geometry}
            material={materials['dark kaki']}
            position={[-45.258, -178.876, -172.816]}
            rotation={[-Math.PI / 2, 0.177, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_27_3.geometry}
            material={materials['dark kaki']}
            position={[-255.933, 95.822, -172.965]}
            rotation={[1.571, 1.471, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_28_3.geometry}
            material={materials['dark kaki']}
            position={[-188.266, 249.721, -172.816]}
            rotation={[Math.PI / 2, 0.802, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_29_3.geometry}
            material={materials['dark kaki']}
            position={[-213.994, 217.462, -172.816]}
            rotation={[Math.PI / 2, 0.976, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_2_4.geometry}
            material={materials['dark kaki']}
            position={[-214.189, 216.949, -99.705]}
            rotation={[Math.PI / 2, 0.985, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_30_3.geometry}
            material={materials['dark kaki']}
            position={[-248.558, 138.702, -172.975]}
            rotation={[1.571, 1.325, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_31_3.geometry}
            material={materials['dark kaki']}
            position={[-234.283, 180.086, -172.816]}
            rotation={[Math.PI / 2, 1.151, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_32_3.geometry}
            material={materials['dark kaki']}
            position={[-122.188, 300.322, -172.816]}
            rotation={[Math.PI / 2, 0.502, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_33_3.geometry}
            material={materials['dark kaki']}
            position={[-157.203, 277.749, -172.816]}
            rotation={[Math.PI / 2, 0.645, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_34_3.geometry}
            material={materials['dark kaki']}
            position={[-84.011, 316.988, -172.816]}
            rotation={[Math.PI / 2, Math.PI / 9, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_35_3.geometry}
            material={materials['dark kaki']}
            position={[-43.819, 328.07, -172.816]}
            rotation={[Math.PI / 2, 0.175, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_3_3.geometry}
            material={materials['dark kaki']}
            position={[-256.053, 97.333, -99.705]}
            rotation={[1.571, 1.474, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_3_4.geometry}
            material={materials['dark kaki']}
            position={[-234.364, 180.433, -99.705]}
            rotation={[Math.PI / 2, 1.146, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_4_3.geometry}
            material={materials['dark kaki']}
            position={[-123.255, 300.684, -99.705]}
            rotation={[Math.PI / 2, 0.498, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_5_3.geometry}
            material={materials['dark kaki']}
            position={[-85.399, 317.549, -99.705]}
            rotation={[Math.PI / 2, 0.323, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_6_3.geometry}
            material={materials['dark kaki']}
            position={[-158.061, 278.028, -99.705]}
            rotation={[Math.PI / 2, 0.672, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_7_3.geometry}
            material={materials['dark kaki']}
            position={[-188.623, 249.579, -99.705]}
            rotation={[Math.PI / 2, 0.832, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_8_3.geometry}
            material={materials['dark kaki']}
            position={[-45.258, 328.07, -99.705]}
            rotation={[Math.PI / 2, 0.177, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.半圓波浪1_9_3.geometry}
            material={materials['dark kaki']}
            position={[-255.933, 53.373, -99.556]}
            rotation={[-1.571, 1.471, 3.142]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel.geometry}
          material={materials['pretty green']}
          position={[0, 0, -190.485]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel_1.geometry}
          material={materials['pretty green']}
          position={[0, 0, -190.485]}
          rotation={[0, 0, -Math.PI]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc_4.geometry}
        material={materials.metal}
        position={[-3.48, -3.9, -3.342]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc_3.geometry}
        material={materials.metal}
        position={[3.48, -3.9, -3.342]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc_2.geometry}
        material={materials.metal}
        position={[1.164, -3.9, -3.342]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc_1.geometry}
        material={materials.metal}
        position={[-1.164, -3.9, -3.342]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_4_4.geometry}
        material={materials.pink}
        position={[5.672, -3.88, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3_4.geometry}
        material={materials.yello02}
        position={[5.709, -3.88, 0]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2_4.geometry}
        material={materials.yello02}
        position={[-5.709, -3.88, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1_3.geometry}
        material={materials.pink}
        position={[-5.672, -3.88, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Disc_5.geometry}
        material={materials['dark blue']}
        position={[0, -0.75, 1.07]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      />
      <spotLight
        intensity={0.08}
        angle={0.009}
        penumbra={0.15}
        decay={2}
        position={[2.64, 4.192, 8.942]}
        rotation={[-0.589, 0.477, 0.328]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_5.geometry}
        material={materials['Material.001']}
        position={[0, -4.223, -4.061]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_4.geometry}
        material={materials['Material.001']}
        position={[-2.32, -4.223, -4.061]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_3.geometry}
        material={materials['Material.001']}
        position={[2.32, -4.223, -4.061]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_2.geometry}
        material={materials['Material.001']}
        position={[-2.32, -4.223, 4.077]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_1.geometry}
        material={materials['Material.001']}
        position={[2.32, -4.223, 4.077]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.001']}
        position={[0, -4.223, 4.077]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group rotation={[0, 0, Math.PI]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_16_5.geometry}
          material={nodes.Cube_16_5.material}
          position={[-551.885, 445.263, 94]}
          rotation={[0, -1.571, 0]}
        />
        <group position={[-551.885, 419.266, 285]} rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh533.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh533_1.geometry}
            material={materials.mix}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_26_3.geometry}
          material={nodes.Cube_26_3.material}
          position={[-551.885, 445.263, -94]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_28_3.geometry}
          material={materials.orang}
          position={[-551.885, 419.266, -284.22]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_5.geometry}
          material={materials.orang}
          position={[-551.885, 572.96, 285]}
          rotation={[0, -1.571, 0]}
        />
        <group position={[-550.885, 507.175, 176.948]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh536.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh536_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh536_2.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh536_3.geometry}
            material={materials.red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh536_4.geometry}
            material={materials.peach}
          />
        </group>
        <group
          position={[-551.885, 507.175, -176.948]}
          rotation={[0, -1.571, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh904.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh904_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh904_2.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh904_3.geometry}
            material={materials.red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh904_4.geometry}
            material={materials.peach}
          />
        </group>
        <group position={[551.885, 507.175, 176.948]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh906.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh906_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh906_2.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh906_3.geometry}
            material={materials.red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh906_4.geometry}
            material={materials.peach}
          />
        </group>
        <group
          position={[551.885, 507.175, -176.948]}
          rotation={[0, -1.571, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh908.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh908_1.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh908_2.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh908_3.geometry}
            material={materials.red}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh908_4.geometry}
            material={materials.peach}
          />
        </group>
        <group position={[-551.885, 495.962, 286.546]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh535.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh535_1.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh535_2.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[-551.885, 495.962, -286.546]}
          rotation={[0, 1.571, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh902.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh902_1.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh902_2.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[551.885, 495.962, 286.546]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh905.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh905_1.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh905_2.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[551.885, 495.962, -286.546]} rotation={[0, 1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh907.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh907_1.geometry}
            material={materials['white blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh907_2.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group
          position={[-551.885, 396.519, 380.471]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh523.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh523_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group
          position={[-551.885, 396.519, -380.471]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh910.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh910_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group
          position={[551.885, 396.519, 380.471]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh911.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh911_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group
          position={[551.885, 396.519, -380.471]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh912.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh912_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7_3.geometry}
          material={materials.orang}
          position={[-551.885, 572.96, -284.22]}
          rotation={[0, -1.571, 0]}
        />
        <group
          position={[-551.923, 394.284, 421.195]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh524.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh524_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[-551.923, 394.284, -421.195]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh530.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh530_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_9_4.geometry}
          material={materials.purple}
          position={[-540, 419.391, 0]}
        />
        <group rotation={[0, -1.571, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.L樓梯R扶手_1_2.geometry}
            material={materials.peach}
            position={[31.762, 575.018, 616.953]}
            rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.L樓梯R扶手_3.geometry}
            material={materials.peach}
            position={[-40, 575.018, 616.953]}
            rotation={[-Math.PI / 4, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.扶手L_3.geometry}
            material={materials.peach}
            position={[35.004, 504.172, 525.142]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.扶手R_3.geometry}
            material={materials.peach}
            position={[-35, 504.172, 525.142]}
          />
          <group
            position={[0, 544.936, 622.875]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh518.geometry}
              material={materials['pink rgb']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh518_1.geometry}
              material={materials.metal}
            />
          </group>
          <group
            position={[0, 544.936, -622.875]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh920.geometry}
              material={materials['pink rgb']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mesh920_1.geometry}
              material={materials.metal}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_10_6.geometry}
          material={materials.yello01}
          position={[-502.291, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_10_7.geometry}
          material={nodes.Extrude_10_7.material}
          position={[-473.361, 387.688, -143.195]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_11_5.geometry}
          material={materials.yello01}
          position={[-635.457, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_12_4.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -128.895]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_13_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -114.595]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_14_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 85.995]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_15_4.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 71.695]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_16_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 57.395]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_17_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 114.595]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_18_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 100.295]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_19_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 128.895]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1_7.geometry}
          material={materials.yello01}
          position={[-595.507, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1_8.geometry}
          material={materials.yello01}
          position={[-534.071, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_20_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, 143.195]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_21_3.geometry}
          material={materials.yello01}
          position={[-475.666, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_22_4.geometry}
          material={materials.yello01}
          position={[-490.268, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_23_4.geometry}
          material={materials.yello01}
          position={[-519.47, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_24_4.geometry}
          material={materials.yello01}
          position={[-504.869, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_25_4.geometry}
          material={materials.yello01}
          position={[-534.071, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_26_4.geometry}
          material={materials.yello01}
          position={[-548.673, 387.688, 50.784]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_27_3.geometry}
          material={materials.yello01}
          position={[-502.291, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_28_2.geometry}
          material={materials.yello01}
          position={[-661.824, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_29_3.geometry}
          material={materials.yello01}
          position={[-515.607, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_6.geometry}
          material={materials.yello01}
          position={[-608.824, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_7.geometry}
          material={materials.yello01}
          position={[-504.869, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_30_3.geometry}
          material={materials.yello01}
          position={[-528.924, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_31_3.geometry}
          material={materials.yello01}
          position={[-582.19, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_32_3.geometry}
          material={materials.yello01}
          position={[-568.874, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_33_3.geometry}
          material={materials.yello01}
          position={[-542.24, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_34_3.geometry}
          material={materials.yello01}
          position={[-555.557, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_35_3.geometry}
          material={materials.yello01}
          position={[-608.824, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_36_3.geometry}
          material={materials.yello01}
          position={[-595.507, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_37_3.geometry}
          material={materials.yello01}
          position={[-622.14, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_38_3.geometry}
          material={materials.yello01}
          position={[-635.457, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_39_2.geometry}
          material={materials.yello01}
          position={[-648.507, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3_6.geometry}
          material={materials.yello01}
          position={[-555.557, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_3_7.geometry}
          material={materials.yello01}
          position={[-519.47, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_42_2.geometry}
          material={materials.yello01}
          position={[-661.824, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_43_2.geometry}
          material={materials.yello01}
          position={[-648.507, 417.781, 29.3]}
          rotation={[Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_7_2.geometry}
          material={materials.yello01}
          position={[-542.24, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_4_8_2.geometry}
          material={materials.yello01}
          position={[-490.268, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5_6.geometry}
          material={materials.yello01}
          position={[-568.874, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_5_7.geometry}
          material={materials.yello01}
          position={[-475.666, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_6_6.geometry}
          material={materials.yello01}
          position={[-582.19, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_6_7.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -57.395]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7_5.geometry}
          material={materials.yello01}
          position={[-528.924, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7_6.geometry}
          material={materials.yello01}
          position={[-622.14, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_7_7.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -71.695]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8_5.geometry}
          material={materials.yello01}
          position={[-515.607, 417.781, -28.049]}
          rotation={[-Math.PI / 6, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8_6.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -100.295]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_8_7.geometry}
          material={materials.yello01}
          position={[-548.673, 387.688, -48.979]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_9_3.geometry}
          material={materials.yello01}
          position={[-473.361, 387.688, -85.995]}
          rotation={[0, -1.571, 0]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group
          position={[-348.357, 451.035, 369.798]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh538.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh538_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[-116.401, 451.035, 369.798]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh913.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh913_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[115.401, 451.035, 369.798]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh914.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh914_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[348.5, 451.035, 369.798]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh915.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh915_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group position={[348.5, 514.547, 369.797]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh544.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh544_1.geometry}
            material={materials.yello01}
          />
        </group>
        <group position={[115.401, 514.547, 369.797]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh541.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh541_1.geometry}
            material={materials.yello01}
          />
        </group>
        <group position={[-116.401, 514.547, 369.797]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh540.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh540_1.geometry}
            material={materials.yello01}
          />
        </group>
        <group position={[-348.357, 514.547, 369.797]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh537.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh537_1.geometry}
            material={materials.yello01}
          />
        </group>
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group
          position={[-354.95, 452.125, 169]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh566.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh566_1.geometry}
            material={materials.kaki}
          />
        </group>
        <group
          position={[-354.95, 452.125, -169]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh557.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh557_1.geometry}
            material={materials.kaki}
          />
        </group>
        <group
          position={[354.95, 452.125, 169]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh567.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh567_1.geometry}
            material={materials.kaki}
          />
        </group>
        <group
          position={[354.95, 452.125, -169]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh558.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh558_1.geometry}
            material={materials.kaki}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_21.geometry}
          material={materials.kaki}
          position={[0, 452.125, -169]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_25.geometry}
          material={materials.purple}
          position={[421.143, 387.906, 96.406]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_25_2.geometry}
          material={materials.purple}
          position={[-421.143, 387.906, -96.406]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_35.geometry}
          material={materials.purple}
          position={[-505.83, 387.984, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_47.geometry}
          material={materials.purple}
          position={[505.83, 387.984, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4_6.geometry}
          material={materials.orang}
          position={[0, 395.359, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_50.geometry}
          material={materials.purple}
          position={[-421.143, 387.906, 96.406]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_50_2.geometry}
          material={materials.purple}
          position={[421.143, 387.906, -96.406]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_70.geometry}
          material={materials.kaki}
          position={[348.357, 517.669, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_71.geometry}
          material={materials.kaki}
          position={[-348.357, 517.669, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_72.geometry}
          material={materials.kaki}
          position={[115.401, 517.669, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_73.geometry}
          material={materials.kaki}
          position={[-116.401, 517.669, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8_3.geometry}
          material={materials.kaki}
          position={[0, 452.125, 169]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass.geometry}
          material={materials.glass}
          position={[-348.357, 375.882, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_1.geometry}
          material={materials.glass}
          position={[-116.401, 375.882, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_2.geometry}
          material={materials.glass}
          position={[115.401, 375.882, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass_3.geometry}
          material={materials.glass}
          position={[348.357, 375.882, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.梁柱1.geometry}
          material={materials.kaki}
          position={[115.401, 395.359, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.梁柱1_1.geometry}
          material={materials.kaki}
          position={[-115.401, 395.359, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.梁柱1_2.geometry}
          material={materials.kaki}
          position={[-348.357, 395.359, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.梁柱1_3.geometry}
          material={materials.kaki}
          position={[348.357, 395.359, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.飾條.geometry}
          material={nodes.飾條.material}
          position={[348.357, 369.559, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.飾條_1.geometry}
          material={nodes.飾條_1.material}
          position={[115.401, 369.559, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.飾條_2.geometry}
          material={nodes.飾條_2.material}
          position={[-115.401, 369.559, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.飾條_3.geometry}
          material={nodes.飾條_3.material}
          position={[-348.357, 369.559, 0]}
        />
      </group>
      <group rotation={[-Math.PI, -1.571, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_10_8.geometry}
          material={materials['yellow orange']}
          position={[-350.871, 425.34, -232.437]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_1_10.geometry}
          material={materials['yellow orange']}
          position={[-350.871, 425.34, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_26_5.geometry}
          material={materials['yellow orange']}
          position={[349.252, 425.34, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_27_4.geometry}
          material={materials['yellow orange']}
          position={[349.252, 425.34, 232.437]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_28_3.geometry}
          material={materials['yellow orange']}
          position={[349.252, 425.34, -232.437]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Extrude_2_8.geometry}
          material={materials['yellow orange']}
          position={[-350.871, 425.34, 232.437]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <group
          position={[-536.174, 551.537, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh578.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh578_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[-536.174, 551.537, -232.437]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh579.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh579_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[-536.174, 551.537, 232.437]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh577.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh577_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[536.174, 551.537, 232.437]}
          rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh576.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh576_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[536.174, 551.537, 0]}
          rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh575.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh575_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[536.174, 551.537, -232.437]}
          rotation={[-Math.PI / 2, -Math.PI / 4, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh574.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh574_1.geometry}
            material={materials['dark green']}
          />
        </group>
      </group>
      <group
        position={[0, 4.931, 0]}
        rotation={[0, Math.PI / 9, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_41.geometry}
          material={materials.peach}
          position={[0, 21.078, 0]}
          rotation={[-Math.PI / 2, 0, 2.356]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_42.geometry}
          material={materials.E6E6E6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials.red}
          position={[-90, -35.484, 0]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group position={[0, -407.397, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh603.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh603_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_14_3.geometry}
          material={materials.orang}
          position={[0, -439.704, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_17_3.geometry}
          material={materials.orang}
          position={[42.91, -407.088, 27.712]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1_6.geometry}
          material={materials.butter}
          position={[34.646, -420, -20]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_24.geometry}
          material={materials.orang}
          position={[42.92, -407.088, -27.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_25_3.geometry}
          material={materials.orang}
          position={[-42.858, -407.088, -27.641]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_27.geometry}
          material={materials.orang}
          position={[-42.858, -407.088, 27.712]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_6.geometry}
          material={materials.butter}
          position={[-34.646, -420, 20]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_39.geometry}
          material={materials.butter}
          position={[0, -440.479, 0]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3_6.geometry}
          material={materials.butter}
          position={[-34.646, -420, -20]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_40.geometry}
          material={materials.butter}
          position={[0, -440.479, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9_3.geometry}
          material={materials.butter}
          position={[34.646, -420, 20]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1_3.geometry}
          material={materials.glass}
          position={[0, -403.673, 24.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3_2.geometry}
          material={materials.glass}
          position={[-39, -403.673, 0]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_6_4.geometry}
          material={materials.glass}
          position={[0, -403.673, -24.5]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_9.geometry}
          material={materials.glass}
          position={[39, -403.673, 0]}
          rotation={[0, -1.571, 0]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group position={[0, -324, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh607.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh607_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group position={[0, -372.044, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh605.geometry}
            material={materials['dark blue']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh605_1.geometry}
            material={materials.butter}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3_7.geometry}
          material={materials.orang}
          position={[0, -360.294, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group rotation={[-Math.PI, -1.571, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_30.geometry}
          material={materials.butter}
          position={[56.854, -343.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_31.geometry}
          material={materials.butter}
          position={[56.854, -337.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_32.geometry}
          material={materials.butter}
          position={[56.854, -331.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_33.geometry}
          material={materials.butter}
          position={[56.854, -325.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_49.geometry}
          material={materials.butter}
          position={[56.854, -319.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_50_3.geometry}
          material={materials.butter}
          position={[56.854, -313.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_51.geometry}
          material={materials.butter}
          position={[56.854, -307.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_63.geometry}
          material={materials.butter}
          position={[56.854, -301.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6_4.geometry}
          material={materials.butter}
          position={[56.854, -349.275, 0]}
          rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_100.geometry}
          material={materials.butter}
          position={[0, -330.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_101.geometry}
          material={materials.butter}
          position={[0, -324.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_102.geometry}
          material={materials.butter}
          position={[0, -348.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_94.geometry}
          material={materials.butter}
          position={[0, -300.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_95.geometry}
          material={materials.butter}
          position={[0, -306.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_96.geometry}
          material={materials.butter}
          position={[0, -318.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_97.geometry}
          material={materials.butter}
          position={[0, -312.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_98.geometry}
          material={materials.butter}
          position={[0, -336.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_99.geometry}
          material={materials.butter}
          position={[0, -342.407, 129.479]}
          rotation={[-2.356, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_67.geometry}
          material={materials.butter}
          position={[-56.265, -300.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_68.geometry}
          material={materials.butter}
          position={[-56.265, -306.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_78.geometry}
          material={materials.butter}
          position={[-56.265, -312.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_79.geometry}
          material={materials.butter}
          position={[-56.265, -318.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_80.geometry}
          material={materials.butter}
          position={[-56.265, -324.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_81.geometry}
          material={materials.butter}
          position={[-56.265, -330.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_82.geometry}
          material={materials.butter}
          position={[-56.265, -336.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_83.geometry}
          material={materials.butter}
          position={[-56.265, -342.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_84.geometry}
          material={materials.butter}
          position={[-56.265, -348.847, 0]}
          rotation={[-Math.PI / 2, Math.PI / 4, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_85.geometry}
          material={materials.butter}
          position={[0, -348.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_86.geometry}
          material={materials.butter}
          position={[0, -342.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_87.geometry}
          material={materials.butter}
          position={[0, -336.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_88.geometry}
          material={materials.butter}
          position={[0, -330.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_89.geometry}
          material={materials.butter}
          position={[0, -324.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_90.geometry}
          material={materials.butter}
          position={[0, -318.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_91.geometry}
          material={materials.butter}
          position={[0, -312.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_92.geometry}
          material={materials.butter}
          position={[0, -306.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_93.geometry}
          material={materials.butter}
          position={[0, -300.407, -130.556]}
          rotation={[2.356, 0, Math.PI]}
        />
      </group>
      <group
        position={[3.484, -5.177, 3.854]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647_1.geometry}
          material={materials['dark blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647_3.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647_4.geometry}
          material={materials.kaki}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh647_5.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[3.484, -3.91, -3.299]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh648.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh648_1.geometry}
          material={materials['dark blue']}
        />
      </group>
      <group
        position={[1.154, -3.91, -3.299]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh649.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh649_1.geometry}
          material={materials['dark blue']}
        />
      </group>
      <group
        position={[-1.164, -3.91, -3.299]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh650.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh650_1.geometry}
          material={materials['dark blue']}
        />
      </group>
      <group
        position={[-3.484, -3.91, -3.299]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh651.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh651_1.geometry}
          material={materials['dark blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_48.geometry}
        material={materials.purple}
        position={[5.59, -3.88, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.F小花_R.geometry}
        material={materials.yello02}
        position={[3.666, -2.891, 1.15]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.F小花_L.geometry}
        material={materials.yello02}
        position={[-3.686, -2.931, 1.15]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B小花_L.geometry}
        material={materials.yello02}
        position={[3.686, -2.931, -1.15]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B小花_R.geometry}
        material={materials.yello02}
        position={[-3.686, -2.911, -1.15]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_34.geometry}
        material={materials.purple}
        position={[-5.59, -3.88, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group
        position={[0, 0.03, 0.01]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_2.geometry}
          material={materials.purple}
          position={[36.904, 349.525, 553.252]}
          rotation={[-3.058, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_6_5.geometry}
          material={materials.purple}
          position={[36.904, 103.803, 320.611]}
          rotation={[-1.685, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_2.geometry}
          material={materials.purple}
          position={[36.904, 111.649, 360.655]}
          rotation={[-1.843, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_2.geometry}
          material={materials.purple}
          position={[36.904, 125.478, 399.207]}
          rotation={[-2.001, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_2.geometry}
          material={materials.purple}
          position={[36.904, 145.141, 435.297]}
          rotation={[-2.147, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_2.geometry}
          material={materials.purple}
          position={[36.904, 170.114, 467.662]}
          rotation={[-2.313, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_2.geometry}
          material={materials.purple}
          position={[36.904, 200.098, 495.84]}
          rotation={[-2.475, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_2.geometry}
          material={materials.purple}
          position={[36.904, 234.219, 518.722]}
          rotation={[-2.624, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_2.geometry}
          material={materials.purple}
          position={[36.904, 271.416, 536.029]}
          rotation={[-2.776, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_2.geometry}
          material={materials.purple}
          position={[36.904, 310.361, 547.555]}
          rotation={[-2.927, 0, -Math.PI / 2]}
        />
      </group>
      <group
        position={[0, 0.03, 0.03]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_3.geometry}
          material={materials.pink}
          position={[41.904, 349.358, 555.245]}
          rotation={[-3.058, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_7_5.geometry}
          material={materials.pink}
          position={[41.904, 101.816, 320.84]}
          rotation={[-1.685, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_3.geometry}
          material={materials.pink}
          position={[41.904, 109.722, 361.192]}
          rotation={[-1.843, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_3.geometry}
          material={materials.pink}
          position={[41.904, 123.66, 400.041]}
          rotation={[-2.001, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_3.geometry}
          material={materials.pink}
          position={[41.904, 143.464, 436.387]}
          rotation={[-2.147, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_3.geometry}
          material={materials.pink}
          position={[41.904, 168.64, 469.014]}
          rotation={[-2.313, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_3.geometry}
          material={materials.pink}
          position={[41.904, 198.861, 497.412]}
          rotation={[-2.475, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_3.geometry}
          material={materials.pink}
          position={[41.904, 233.229, 520.46]}
          rotation={[-2.624, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_3.geometry}
          material={materials.pink}
          position={[41.904, 270.7, 537.896]}
          rotation={[-2.776, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_3.geometry}
          material={materials.pink}
          position={[41.904, 309.934, 549.509]}
          rotation={[-2.927, 0, -Math.PI / 2]}
        />
      </group>
      <group
        position={[-0.095, 0.028, -0.01]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_4.geometry}
          material={materials.purple}
          position={[-36.668, 349.525, 563.252]}
          rotation={[-3.058, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_8_5.geometry}
          material={materials.purple}
          position={[-36.668, 103.803, 330.611]}
          rotation={[-1.685, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_4.geometry}
          material={materials.purple}
          position={[-36.668, 111.649, 370.655]}
          rotation={[-1.843, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_4.geometry}
          material={materials.purple}
          position={[-36.668, 125.478, 409.207]}
          rotation={[-2.001, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_4.geometry}
          material={materials.purple}
          position={[-36.668, 145.141, 445.297]}
          rotation={[-2.147, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_4.geometry}
          material={materials.purple}
          position={[-36.668, 170.114, 477.662]}
          rotation={[-2.313, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_4.geometry}
          material={materials.purple}
          position={[-36.668, 200.098, 505.84]}
          rotation={[-2.475, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_4.geometry}
          material={materials.purple}
          position={[-36.668, 234.219, 528.722]}
          rotation={[-2.624, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_4.geometry}
          material={materials.purple}
          position={[-36.668, 271.416, 546.029]}
          rotation={[-2.776, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_4.geometry}
          material={materials.purple}
          position={[-36.668, 310.36, 557.555]}
          rotation={[-2.927, 0, Math.PI / 2]}
        />
      </group>
      <group
        position={[-0.095, 0.028, -0.03]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_5.geometry}
          material={materials.pink}
          position={[-41.668, 349.358, 565.245]}
          rotation={[-3.058, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_9_5.geometry}
          material={materials.pink}
          position={[-41.668, 101.816, 330.84]}
          rotation={[-1.685, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_5.geometry}
          material={materials.pink}
          position={[-41.668, 109.722, 371.192]}
          rotation={[-1.843, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_5.geometry}
          material={materials.pink}
          position={[-41.668, 123.66, 410.041]}
          rotation={[-2.001, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_5.geometry}
          material={materials.pink}
          position={[-41.668, 143.464, 446.387]}
          rotation={[-2.147, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_5.geometry}
          material={materials.pink}
          position={[-41.668, 168.64, 479.014]}
          rotation={[-2.313, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_5.geometry}
          material={materials.pink}
          position={[-41.668, 198.861, 507.412]}
          rotation={[-2.475, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_5.geometry}
          material={materials.pink}
          position={[-41.668, 233.229, 530.46]}
          rotation={[-2.624, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_5.geometry}
          material={materials.pink}
          position={[-41.668, 270.7, 547.896]}
          rotation={[-2.776, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_5.geometry}
          material={materials.pink}
          position={[-41.668, 309.934, 559.509]}
          rotation={[-2.927, 0, Math.PI / 2]}
        />
      </group>
      <group
        position={[0.09, 0.028, 0.03]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_6.geometry}
          material={materials.pink}
          position={[-41.668, 349.358, 565.245]}
          rotation={[-3.058, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_10_5.geometry}
          material={materials.pink}
          position={[-41.668, 101.816, 330.84]}
          rotation={[-1.685, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_6.geometry}
          material={materials.pink}
          position={[-41.668, 109.722, 371.192]}
          rotation={[-1.843, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_6.geometry}
          material={materials.pink}
          position={[-41.668, 123.66, 410.041]}
          rotation={[-2.001, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_6.geometry}
          material={materials.pink}
          position={[-41.668, 143.464, 446.387]}
          rotation={[-2.147, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_6.geometry}
          material={materials.pink}
          position={[-41.668, 168.64, 479.014]}
          rotation={[-2.313, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_6.geometry}
          material={materials.pink}
          position={[-41.668, 198.861, 507.412]}
          rotation={[-2.475, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_6.geometry}
          material={materials.pink}
          position={[-41.668, 233.229, 530.46]}
          rotation={[-2.624, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_6.geometry}
          material={materials.pink}
          position={[-41.668, 270.7, 547.896]}
          rotation={[-2.776, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_6.geometry}
          material={materials.pink}
          position={[-41.668, 309.934, 559.509]}
          rotation={[-2.927, 0, Math.PI / 2]}
        />
      </group>
      <group
        position={[0.09, 0.028, 0.01]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_7.geometry}
          material={materials.purple}
          position={[-36.668, 349.525, 563.252]}
          rotation={[-3.058, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_11_5.geometry}
          material={materials.purple}
          position={[-36.668, 103.803, 330.611]}
          rotation={[-1.685, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_7.geometry}
          material={materials.purple}
          position={[-36.668, 111.649, 370.655]}
          rotation={[-1.843, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_7.geometry}
          material={materials.purple}
          position={[-36.668, 125.478, 409.207]}
          rotation={[-2.001, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_7.geometry}
          material={materials.purple}
          position={[-36.668, 145.141, 445.297]}
          rotation={[-2.147, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_7.geometry}
          material={materials.purple}
          position={[-36.668, 170.114, 477.662]}
          rotation={[-2.313, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_7.geometry}
          material={materials.purple}
          position={[-36.668, 200.098, 505.84]}
          rotation={[-2.475, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_7.geometry}
          material={materials.purple}
          position={[-36.668, 234.219, 528.722]}
          rotation={[-2.624, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_7.geometry}
          material={materials.purple}
          position={[-36.668, 271.416, 546.029]}
          rotation={[-2.776, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_7.geometry}
          material={materials.purple}
          position={[-36.668, 310.36, 557.555]}
          rotation={[-2.927, 0, Math.PI / 2]}
        />
      </group>
      <group
        position={[-0.005, 0.03, -0.03]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_8.geometry}
          material={materials.pink}
          position={[41.904, 349.358, 555.245]}
          rotation={[-3.058, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_12_5.geometry}
          material={materials.pink}
          position={[41.904, 101.816, 320.84]}
          rotation={[-1.685, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_8.geometry}
          material={materials.pink}
          position={[41.904, 109.722, 361.192]}
          rotation={[-1.843, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_8.geometry}
          material={materials.pink}
          position={[41.904, 123.66, 400.041]}
          rotation={[-2.001, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_8.geometry}
          material={materials.pink}
          position={[41.904, 143.464, 436.387]}
          rotation={[-2.147, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_8.geometry}
          material={materials.pink}
          position={[41.904, 168.64, 469.014]}
          rotation={[-2.313, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_8.geometry}
          material={materials.pink}
          position={[41.904, 198.861, 497.412]}
          rotation={[-2.475, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_8.geometry}
          material={materials.pink}
          position={[41.904, 233.229, 520.46]}
          rotation={[-2.624, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_8.geometry}
          material={materials.pink}
          position={[41.904, 270.7, 537.896]}
          rotation={[-2.776, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_8.geometry}
          material={materials.pink}
          position={[41.904, 309.934, 549.509]}
          rotation={[-2.927, 0, -Math.PI / 2]}
        />
      </group>
      <group
        position={[-0.005, 0.03, -0.01]}
        rotation={[-Math.PI, -1.571, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪10_9.geometry}
          material={materials.purple}
          position={[36.904, 349.525, 553.252]}
          rotation={[-3.058, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪1_13_5.geometry}
          material={materials.purple}
          position={[36.904, 103.803, 320.611]}
          rotation={[-1.685, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪2_9.geometry}
          material={materials.purple}
          position={[36.904, 111.649, 360.655]}
          rotation={[-1.843, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪3_9.geometry}
          material={materials.purple}
          position={[36.904, 125.478, 399.207]}
          rotation={[-2.001, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪4_9.geometry}
          material={materials.purple}
          position={[36.904, 145.141, 435.297]}
          rotation={[-2.147, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪5_9.geometry}
          material={materials.purple}
          position={[36.904, 170.115, 467.662]}
          rotation={[-2.313, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪6_9.geometry}
          material={materials.purple}
          position={[36.904, 200.098, 495.84]}
          rotation={[-2.475, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪7_9.geometry}
          material={materials.purple}
          position={[36.904, 234.219, 518.722]}
          rotation={[-2.624, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪8_9.geometry}
          material={materials.purple}
          position={[36.904, 271.416, 536.029]}
          rotation={[-2.776, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.半圓波浪9_9.geometry}
          material={materials.purple}
          position={[36.904, 310.361, 547.555]}
          rotation={[-2.927, 0, -Math.PI / 2]}
        />
      </group>
      <group
        position={[4.618, -4.899, 0.001]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh738.geometry}
          material={materials.butter}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh738_1.geometry}
          material={materials['sky blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh738_2.geometry}
          material={materials.red}
        />
      </group>
      <group rotation={[0, 0, Math.PI]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10_3.geometry}
          material={materials.glass}
          position={[231.929, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1_7.geometry}
          material={materials.glass}
          position={[-0.235, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_8.geometry}
          material={materials.glass}
          position={[-231.929, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1_2.geometry}
          material={materials.purple}
          position={[471.5, 409.563, -48.71]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials.purple}
          position={[-471.763, 405.323, -48.71]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2_2.geometry}
          material={materials.yello01}
          position={[-475.763, 400.323, -52.71]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={materials.yello01}
          position={[475.293, 404.563, -52.71]}
          rotation={[0, 1.571, 0]}
        />
        <group
          position={[-0.235, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh751.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh751_1.geometry}
            material={materials.yello01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh751_2.geometry}
            material={materials.butter}
          />
        </group>
        <group
          position={[231.929, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh745.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh745_1.geometry}
            material={materials.yello01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh745_2.geometry}
            material={materials.butter}
          />
        </group>
        <group
          position={[-231.929, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh753.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh753_1.geometry}
            material={materials.yello01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh753_2.geometry}
            material={materials.butter}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_33_2.geometry}
          material={materials.purple}
          position={[-429.603, 390.333, -147.933]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6.geometry}
          material={materials.yello02}
          position={[-392.24, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_7.geometry}
          material={materials.yello02}
          position={[-427.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_8.geometry}
          material={materials.yello02}
          position={[-462.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_51_2.geometry}
          material={materials.purple}
          position={[429.603, 390.333, -147.933]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_10.geometry}
          material={materials.yello02}
          position={[427.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_11.geometry}
          material={materials.yello02}
          position={[462.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_9.geometry}
          material={materials.yello02}
          position={[392.24, 392.108, -154.281]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_11_3.geometry}
          material={materials.glass}
          position={[231.929, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1_8.geometry}
          material={materials.glass}
          position={[-0.235, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_9.geometry}
          material={materials.glass}
          position={[-231.929, 395.359, -139.617]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1_3.geometry}
          material={materials.purple}
          position={[471.5, 409.563, -48.71]}
          rotation={[0, 1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2_3.geometry}
          material={materials.yello01}
          position={[-475.763, 400.323, -52.71]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3_2.geometry}
          material={materials.purple}
          position={[-471.763, 405.323, -48.71]}
          rotation={[-Math.PI, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3_3.geometry}
          material={materials.yello01}
          position={[475.293, 404.563, -52.71]}
          rotation={[0, 1.571, 0]}
        />
        <group
          position={[-0.235, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh770.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh770_1.geometry}
            material={materials.butter}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh770_2.geometry}
            material={materials.yello01}
          />
        </group>
        <group
          position={[-231.929, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh772.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh772_1.geometry}
            material={materials.yello01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh772_2.geometry}
            material={materials.butter}
          />
        </group>
        <group
          position={[231.929, 395.359, -122.047]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh764.geometry}
            material={materials.purple}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh764_1.geometry}
            material={materials.yello01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh764_2.geometry}
            material={materials.butter}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_33_3.geometry}
          material={materials.purple}
          position={[-429.603, 390.333, -147.933]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6_2.geometry}
          material={materials.yello02}
          position={[-392.24, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_7_2.geometry}
          material={materials.yello02}
          position={[-427.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_8_2.geometry}
          material={materials.yello02}
          position={[-462.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_51_3.geometry}
          material={materials.purple}
          position={[429.603, 390.333, -147.933]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_10_2.geometry}
          material={materials.yello02}
          position={[427.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_11_2.geometry}
          material={materials.yello02}
          position={[462.28, 392.108, -154.281]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_9_2.geometry}
          material={materials.yello02}
          position={[392.24, 392.108, -154.281]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group
          position={[-348.417, 395.396, -330.152]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh786.geometry}
            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh786_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[-116.461, 395.396, -330.152]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh788.geometry}
            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh788_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[115.391, 395.396, -330.152]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh790.geometry}
            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh790_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <group
          position={[348.297, 395.396, -330.152]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh784.geometry}
            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh784_1.geometry}
            material={materials['dark blue']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.star1.geometry}
          material={materials['white grey']}
          position={[-348.297, 394.963, -335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.star2.geometry}
          material={materials['white grey']}
          position={[-116.341, 394.963, -335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.star3.geometry}
          material={materials['white grey']}
          position={[115.51, 394.963, -335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.star4.geometry}
          material={materials['white grey']}
          position={[348.417, 394.963, -335]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天花板.geometry}
        material={nodes.天花板.material}
        position={[0, -3.96, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <group
        position={[0, 2.42, -1.304]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_10_3.geometry}
          material={materials['yellow orange']}
          position={[35.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_1_3.geometry}
          material={materials['yellow orange']}
          position={[-35.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_2_4.geometry}
          material={materials['yellow orange']}
          position={[164.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_3_3.geometry}
          material={materials['yellow orange']}
          position={[-69.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_3_4.geometry}
          material={materials['yellow orange']}
          position={[0, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_4_3.geometry}
          material={materials['yellow orange']}
          position={[-103.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_5_3.geometry}
          material={materials['yellow orange']}
          position={[-135.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_6_3.geometry}
          material={materials['yellow orange']}
          position={[-164.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_7_3.geometry}
          material={materials['yellow orange']}
          position={[135.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_8_3.geometry}
          material={materials['yellow orange']}
          position={[103.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_9_3.geometry}
          material={materials['yellow orange']}
          position={[69.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel_2_2.geometry}
          material={materials.butter}
          position={[0, -14.031, 317.029]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group
          position={[300.554, -0.001, 369.979]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh819.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh819_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group
          position={[287.539, -97, 369.979]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh817.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh817_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[287.539, 97.342, 369.979]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh816.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh816_1.geometry}
            material={materials['dark green']}
          />
        </group>
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group
          position={[-287.752, 369.979, -97.342]}
          rotation={[0, 0, -Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh822.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh822_1.geometry}
            material={materials['dark green']}
          />
        </group>
        <group
          position={[-300.554, 369.979, 0.001]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh821.geometry}
            material={materials['dark green']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh821_1.geometry}
            material={materials.E6E6E6}
          />
        </group>
        <group
          position={[-287.752, 369.979, 97]}
          rotation={[-Math.PI, 0, -Math.PI]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh820.geometry}
            material={materials['pink rgb']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh820_1.geometry}
            material={materials['dark green']}
          />
        </group>
      </group>
      <group
        position={[0, 2.42, 1.304]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_10_4.geometry}
          material={materials['yellow orange']}
          position={[35.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_1_4.geometry}
          material={materials['yellow orange']}
          position={[-35.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_2_5.geometry}
          material={materials['yellow orange']}
          position={[164.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_3_5.geometry}
          material={materials['yellow orange']}
          position={[-69.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_4_4.geometry}
          material={materials['yellow orange']}
          position={[-103.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_4_5.geometry}
          material={materials['yellow orange']}
          position={[0, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_5_4.geometry}
          material={materials['yellow orange']}
          position={[-135.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_6_4.geometry}
          material={materials['yellow orange']}
          position={[-164.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_7_4.geometry}
          material={materials['yellow orange']}
          position={[135.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_8_4.geometry}
          material={materials['yellow orange']}
          position={[103.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pyramid_9_4.geometry}
          material={materials['yellow orange']}
          position={[69.414, -1.127, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.weel_2_4.geometry}
          material={materials.butter}
          position={[0, -14.031, 317.029]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI, 0, Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1_6_2.geometry}
            material={materials.yello02}
            position={[-266.914, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_7.geometry}
            material={materials.yello02}
            position={[-249.938, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3_8.geometry}
            material={materials.yello02}
            position={[-232.999, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4_6.geometry}
            material={materials.yello02}
            position={[-216.042, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5_6.geometry}
            material={materials.yello02}
            position={[-199.065, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6_7.geometry}
            material={materials.yello02}
            position={[-283.872, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6_8.geometry}
            material={materials.yello02}
            position={[-181.965, 358.467, -46.112]}
          />
        </group>
        <group rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1_5_2.geometry}
            material={materials.yello02}
            position={[198.922, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_2_6.geometry}
            material={materials.yello02}
            position={[215.899, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_3_7.geometry}
            material={materials.yello02}
            position={[232.837, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_4_5.geometry}
            material={materials.yello02}
            position={[249.795, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5_4.geometry}
            material={materials.yello02}
            position={[181.965, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_5_5.geometry}
            material={materials.yello02}
            position={[266.771, 358.467, -46.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_6_6.geometry}
            material={materials.yello02}
            position={[283.871, 358.467, -46.112]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_10_4.geometry}
          material={materials.glass}
          position={[233.669, 290.991, -42.223]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_12_4.geometry}
          material={materials['dark green']}
          position={[0, 45, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1_9.geometry}
          material={materials.orang}
          position={[0, -286, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2_10.geometry}
          material={materials['dark green']}
          position={[234, 315, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3_8.geometry}
          material={materials.glass}
          position={[233.669, 290.991, 42.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_43.geometry}
          material={materials['pink rgb']}
          position={[0, 365.342, -89.597]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_44.geometry}
          material={materials['pink rgb']}
          position={[-170.814, 365.342, -0.104]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_45.geometry}
          material={materials['pink rgb']}
          position={[170.814, 365.342, -0.104]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_46.geometry}
          material={materials['pink rgb']}
          position={[0, 365.342, 89.597]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_4_7.geometry}
          material={materials.glass}
          position={[233.669, 328.157, 42.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5_5.geometry}
          material={materials.glass}
          position={[-233.669, 290.991, -42.223]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_5_6.geometry}
          material={materials['dark green']}
          position={[-234, 315, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_6_5.geometry}
          material={materials.glass}
          position={[-233.669, 328.157, -42.223]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_7_4.geometry}
          material={materials.glass}
          position={[-233.669, 328.157, 42.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_8_4.geometry}
          material={materials.glass}
          position={[-233.669, 290.991, 42.244]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_9_4.geometry}
          material={materials.glass}
          position={[233.669, 328.157, -42.223]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_4_2.geometry}
          material={materials.yello02}
          position={[-266.914, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2_5.geometry}
          material={materials.yello02}
          position={[-249.938, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3_6.geometry}
          material={materials.yello02}
          position={[-232.999, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4_3.geometry}
          material={materials.yello02}
          position={[-283.872, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4_4.geometry}
          material={materials.yello02}
          position={[-216.042, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_5_3.geometry}
          material={materials.yello02}
          position={[-199.065, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6_5.geometry}
          material={materials.yello02}
          position={[-181.965, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1_3_2.geometry}
          material={materials.yello02}
          position={[198.922, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2_4.geometry}
          material={materials.yello02}
          position={[215.899, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3_4.geometry}
          material={materials.yello02}
          position={[181.965, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3_5.geometry}
          material={materials.yello02}
          position={[232.837, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_4_2.geometry}
          material={materials.yello02}
          position={[249.795, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_5_2.geometry}
          material={materials.yello02}
          position={[266.771, 358.467, -46.112]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_6_4.geometry}
          material={materials.yello02}
          position={[283.871, 358.467, -46.112]}
        />
      </group>
      <group
        position={[-2.02, 0.341, 0.086]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={0.01}
      >
        <group position={[0, 51.453, 9.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh887.geometry}
            material={materials.E6E6E6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh887_1.geometry}
            material={materials.pink}
          />
        </group>
        <group position={[0, -68.574, 9.1]} rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh881.geometry}
            material={materials.E6E6E6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh881_1.geometry}
            material={materials.pink}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1_4.geometry}
          material={nodes.Plane_1_4.material}
          position={[-244.856, -8.571, 7.717]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4_2.geometry}
          material={materials.pink}
          position={[244.856, -8.571, 3.15]}
          rotation={[0, -1.571, 0]}
        />
        <group position={[0, -8.571, -18.302]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh884.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh884_1.geometry}
            material={materials['yellow orange']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh884_2.geometry}
            material={materials.pink}
          />
        </group>
      </group>
      <group
        position={[2.02, 0.341, -0.091]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={0.01}
      >
        <group position={[0, 51.452, 9.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh894.geometry}
            material={materials.E6E6E6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh894_1.geometry}
            material={materials.pink}
          />
        </group>
        <group position={[0, -68.574, 9.1]} rotation={[Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh888.geometry}
            material={materials.E6E6E6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh888_1.geometry}
            material={materials.pink}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1_5.geometry}
          material={materials.pink}
          position={[-244.856, -8.571, 7.717]}
          rotation={[0, -1.571, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_5_2.geometry}
          material={materials.pink}
          position={[244.856, -8.571, 3.15]}
          rotation={[0, -1.571, 0]}
        />
        <group position={[0, -8.571, -18.302]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh891.geometry}
            material={materials.orang}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh891_1.geometry}
            material={materials['yellow orange']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh891_2.geometry}
            material={materials.pink}
          />
        </group>
      </group>
      <group
        position={[-4.618, -4.899, 0.001]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh916.geometry}
          material={materials.butter}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh916_1.geometry}
          material={materials['sky blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh916_2.geometry}
          material={materials.red}
        />
      </group>
      <group
        position={[1.154, -5.177, 3.854]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917_1.geometry}
          material={materials['dark blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917_3.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917_4.geometry}
          material={materials.kaki}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh917_5.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-1.164, -5.177, 3.854]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918_1.geometry}
          material={materials['dark blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918_3.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918_4.geometry}
          material={materials.kaki}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh918_5.geometry}
          material={materials.metal}
        />
      </group>
      <group
        position={[-3.484, -5.177, 3.854]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919.geometry}
          material={materials.orang}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919_1.geometry}
          material={materials['dark blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919_2.geometry}
          material={materials.red}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919_3.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919_4.geometry}
          material={materials.kaki}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh919_5.geometry}
          material={materials.metal}
        />
      </group>
      <pointLight
        intensity={79.577}
        decay={2}
        position={[4.076, 5.904, -1.005]}
        rotation={[-1.839, 0.602, 1.932]}
      />
      <pointLight
        intensity={79.577}
        decay={2}
        position={[1.365, 5.904, 8.451]}
        rotation={[-1.839, 0.602, 1.932]}
      />
    </group>
  )
}

useGLTF.preload('/Demo_stuff/buildingO2.glb')
