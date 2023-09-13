import { useGLTF } from "@react-three/drei";

export function Plane({ rotationY, scale, positionY }) {
  const { nodes } = useGLTF("/assets/models/airplane/airplane.glb");
  return (
    <group
      dispose={null}
      scale={scale}
      rotation={[0, Math.PI, 0]}
      position={[0, positionY, 0]}
    >
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/airplane/airplane.glb");
