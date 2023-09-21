"use client";

import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Water } from "three-stdlib";
import { useControls } from "leva";
import { Duck } from "@/app/components/Duck/Duck";
import styles from "./page.module.scss";
import { Perf } from "r3f-perf";
extend({ Water });

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/assets/textures/water.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 200,
      textureHeight: 200,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

export default function DuckPage() {
  const options = useMemo(() => {
    return {
      x: { value: 6.28, min: -1000, max: Math.PI * 2, step: 0.01 },
      y: { value: 0.13, min: 0, max: Math.PI * 2, step: 0.01 },
      z: { value: -12.53, min: -1000, max: Math.PI * 2, step: 0.01 },
    };
  }, []);

  const skyControls = useControls("Sky controls", options);

  return (
    <main className={styles.main}>
      <Canvas camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 5000 }}>
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <Suspense fallback={null}>
          <Duck scale={0.4} position={[0, -2.5, 0]} />
          <Ocean />
          <Environment preset="sunset" />
        </Suspense>
        <Sky
          scale={1000}
          sunPosition={[skyControls.x, skyControls.y, skyControls.z]}
          turbidity={0.1}
        />
        <OrbitControls />
        <Perf position="top-left" />
      </Canvas>
    </main>
  );
}
