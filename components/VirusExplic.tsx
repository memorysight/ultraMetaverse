/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VirusExplic(props) {
  const { nodes, materials } = useGLTF('/textures/Virus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Virus.geometry} material={materials.Mat} />
    </group>
  )
}

useGLTF.preload('/textures/Virus.glb')