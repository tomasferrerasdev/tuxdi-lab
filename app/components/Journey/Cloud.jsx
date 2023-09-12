import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/assets/models/cloud/cloud.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.secondballcloud001.geometry}
        material={nodes.secondballcloud001.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/cloud/cloud.glb");
