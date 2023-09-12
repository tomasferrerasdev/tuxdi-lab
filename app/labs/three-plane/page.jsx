"use client";
import { Journey } from "@/app/components/Journey/Journey";
import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";

const ThreePlane = () => {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={["#ececec"]} />
        <Journey />
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
};

export default ThreePlane;
