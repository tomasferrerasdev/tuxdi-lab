"use client";
import { Journey } from "@/app/components/Journey/Journey";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import { ScrollControls } from "@react-three/drei";

const ThreePlane = () => {
  return (
    <div className={styles.container}>
      <Canvas frameloop="demand">
        <ScrollControls pages={5} damping={0.3}>
          <Journey />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default ThreePlane;
