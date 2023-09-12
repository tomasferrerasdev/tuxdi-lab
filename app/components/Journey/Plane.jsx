import { useGLTF } from "@react-three/drei";

export function Plane(props) {
  const { nodes, materials } = useGLTF("/assets/models/airplane/airplane.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/airplane/airplane.glb");
