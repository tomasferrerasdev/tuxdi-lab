"use client";
import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import {
  BallCollider,
  Physics,
  RigidBody,
  CylinderCollider,
} from "@react-three/rapier";
import styles from "./page.module.scss";
import { Perf } from "r3f-perf";

function Bauble({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}) {
  const api = useRef();
  THREE.ColorManagement.legacyMode = false;
  const baubleMaterial = new THREE.MeshLambertMaterial({
    color: "#c0a0a0",
    emissive: "red",
  });
  const capMaterial = new THREE.MeshStandardMaterial({
    metalness: 0.75,
    roughness: 0.15,
    color: "#8a492f",
    emissive: "#600000",
    envMapIntensity: 20,
  });
  const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * scale}
        position={[0, 0, -1.8 * scale]}
        material={capMaterial}
      />
    </RigidBody>
  );
}

const Pointer = () => {};

const AttractionPage = () => {
  const baubles = [...Array(20)].map(() => ({
    scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
  }));
  return (
    <main className={styles.container}>
      <Suspense fallback="Loading...">
        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        >
          <OrbitControls />
          <axesHelper args={[5]} />
          <Perf position="top-left" />
          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, -0]} intensity={4} color="red" />
          <Physics gravity={[0, 0, 0]} debug>
            {
              baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
            }
          </Physics>
          <Environment preset="forest" />
          <EffectComposer multisampling={0}>
            <SSAO
              samples={11}
              radius={0.15}
              intensity={20}
              luminanceInfluence={0.6}
              color="red"
            />
            <SSAO
              samples={21}
              radius={0.03}
              intensity={15}
              luminanceInfluence={0.6}
              color="red"
            />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </main>
  );
};

export default AttractionPage;
