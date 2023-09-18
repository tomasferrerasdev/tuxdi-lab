import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React, { useMemo } from "react";
import { Ground } from "./Ground";
import { useControls } from "leva";

export const CarShow = () => {
  const options = useMemo(() => {
    return {
      x: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      y: { value: 3.88, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
      visible: true,
    };
  }, []);

  const { intensity, color } = useControls({
    intensity: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.05,
    },
    color: "#fff",
  });

  const sA = useControls("Spotlight A", options);
  const sB = useControls("Spotlight B", options);

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color args={[0, 0, 0]} attach="background" />
      <ambientLight intensity={intensity} color={color} />
      <spotLight
        color={[199, 83, 215]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[sA.x, sA.y, sA.z]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[255, 255, 255]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[sB.x, sB.y, sB.z]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
};
