"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Gravity } from "@/app/components/Gravity/Gravity";
import styles from "./page.module.scss";

export default function GravityPage() {
  return (
    <main className={styles.container}>
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense fallback="loading...">
          <Physics debug>
            <Gravity />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
