import { useGLTF } from "@react-three/drei";

export const Duck = ({ scale, position }) => {
  const { nodes, materials } = useGLTF("/assets/models/duck/duck.glb");
  return (
    <group dispose={null} scale={scale} position={position}>
      <mesh
        geometry={nodes.Duck_Eyes.geometry}
        material={nodes.Duck_Eyes.material}
      />
      <mesh
        geometry={nodes.Duck_Beak.geometry}
        material={nodes.Duck_Beak.material}
      />
      <mesh
        geometry={nodes.Duck_Duck.geometry}
        material={nodes.Duck_Duck.material}
      />
      <mesh
        geometry={nodes.Duck_Wings.geometry}
        material={nodes.Duck_Wings.material}
      />
      <mesh
        geometry={nodes.Plane_Material.geometry}
        material={nodes.Plane_Material.material}
      />
    </group>
  );
};

useGLTF.preload("/assets/models/duck/duck.glb");
