import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cloud3D({ position, rotation, visible, scale }) {
  const { nodes } = useGLTF("/assets/models/cloud3D/cloud3D.glb");
  return (
    <group
      scale={scale}
      dispose={null}
      position={position}
      rotation={rotation}
      visible={visible}
    >
      <mesh
        geometry={nodes.secondballcloud001.geometry}
        material={nodes.secondballcloud001.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/cloud3D/cloud3D.glb");
