import { useGLTF } from "@react-three/drei";

export function Plane() {
  const { nodes } = useGLTF("/assets/models/airplane/airplane.glb");
  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/airplane/airplane.glb");
