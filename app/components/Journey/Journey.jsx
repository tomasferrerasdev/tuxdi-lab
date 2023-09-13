import { Background } from "./Background";
import { Plane } from "./Plane";
import { Cloud3D } from "./Cloud3D";
import {
  Float,
  Line,
  PerspectiveCamera,
  Text,
  useScroll,
} from "@react-three/drei";
import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const Journey = () => {
  const options = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
      visible: true,
    };
  }, []);

  const cA = useControls("Cloud A", options);
  const cB = useControls("Cloud B", options);
  const cC = useControls("Cloud C", options);

  const LINE_NB_POINTS = 12000;
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, -0.8, 0),
        new THREE.Vector3(0, -0.8, -10),
        new THREE.Vector3(2, -0.8, -20),
        new THREE.Vector3(3, -0.8, -30),
        new THREE.Vector3(0, -0.8, -40),
        new THREE.Vector3(5, -0.8, -50),
        new THREE.Vector3(7, -0.8, -60),
        new THREE.Vector3(5, -0.8, -70),
        new THREE.Vector3(0, -0.8, -80),
        new THREE.Vector3(0, -0.8, -90),
        new THREE.Vector3(0, -0.8, -100),
      ],
      false,
      "catmullrom",
      0.5
    );
  });

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const cameraGroup = useRef(null);
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const curPointIndex = Math.min(
      Math.round(scroll.offset * linePoints.length)
    );
    const curPoint = linePoints[curPointIndex];
    const pointAhead =
      linePoints[Math.min(curPointIndex + 1, linePoints.length - 2)];
    const xDisplacement = (pointAhead.x - curPoint.x) * 80;

    const angleRotation =
      (xDisplacement < 0 ? 1 : -1) *
      Math.min(Math.abs(xDisplacement), Math.PI / 3);

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angleRotation
      )
    );
    const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        cameraGroup.current.rotation.x,
        angleRotation,
        cameraGroup.current.rotation.z
      )
    );

    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
    cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);

    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  const airplane = useRef();

  return (
    <>
      <group ref={cameraGroup}>
        <PerspectiveCamera position={[0, 1, 5]} fov={30} makeDefault />
        <Background />
        <group ref={airplane}>
          <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
            <Plane scale={[0.2, 0.2, 0.2]} positionY={0.1} />
          </Float>
        </group>
      </group>
      <group position={[0, 0, -20]}>
        <Text
          color={"yellow"}
          anchorX={"left"}
          anchorY={"middle"}
          fontSize={0.22}
          maxWidth={2.5}
          letterSpacing={0.1}
          font={"/fonts/Thunder-BlackLC.ttf"}
        >
          WE TRANSFORM IDEAS{"\n"}INTO DIGITAL OUTCOMES,{"\n"}WE ARE TUXDI
        </Text>
      </group>
      <group position={[2, -0.1, -40]}>
        <Text
          color={"yellow"}
          anchorX={"right"}
          anchorY={"middle"}
          fontSize={0.1}
          maxWidth={2.5}
        >
          Our company is passionate about details{"\n"}and specialized in UX
          design,{"\n"}Web development, and Mobile apps.
        </Text>
      </group>
      <Line
        points={linePoints}
        color={"white"}
        opacity={0.1}
        lineWidth={16}
        transparent
      />
      <Cloud3D
        position={[1.2, 0, -1.2]}
        rotation={[cA.x, cA.y, cA.z]}
        visible={cA.visible}
        scale={[0.2, 0.2, 0.2]}
      />
      <Cloud3D
        position={[-1.5, 0.5, -2.5]}
        rotation={[cB.x, cB.y, cB.z]}
        visible={cB.visible}
        scale={[0.2, 0.2, 0.2]}
      />
      <Cloud3D
        position={[2, 1.2, -5]}
        rotation={[cC.x, cC.y, cC.z]}
        visible={cC.visible}
        scale={[0.2, 0.2, 0.2]}
      />
      <Cloud3D
        position={[-1, 0, -1]}
        rotation={[cC.x, cC.y, cC.z]}
        visible={cC.visible}
        scale={[0.2, 0.2, 0.2]}
      />
      <Perf position="top-left" />
    </>
  );
};
