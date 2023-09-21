import {
  Box,
  Environment,
  Html,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { Attractor } from "@react-three/rapier-addons";
import React, { useRef, useState } from "react";

export const Gravity = () => {
  const [isHover, setIsHover] = useState(false);
  const cube = useRef(null);
  const jump = () => {
    cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="apartment" />
      <OrbitControls />
      <RigidBody position={[-2.5, 1, 0]} restitution={2} ref={cube}>
        <Box
          onPointerEnter={() => setIsHover(true)}
          onPointerLeave={() => setIsHover(false)}
          onClick={jump}
        >
          <meshStandardMaterial color={isHover ? "yellow" : "hotpink"} />
        </Box>
      </RigidBody>
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color={"springgreen"} />
        </Box>
      </RigidBody>
      <group position={[1, 1, 0]}>
        <Attractor range={20} strength={10} />
        <Html>Attractor</Html>
      </group>
    </>
  );
};
