"use client";
import { CarShow } from "@/app/components/CarShow/CarShow";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styles from "./page.module.scss";

export default function CarShowcase() {
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow />
        </Canvas>
      </Suspense>
    </div>
  );
}
