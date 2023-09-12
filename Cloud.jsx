/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\public\assets\models\cloud\cloud.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/cloud.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.secondballcloud001.geometry} material={nodes.secondballcloud001.material} />
    </group>
  )
}

useGLTF.preload('/cloud.glb')
