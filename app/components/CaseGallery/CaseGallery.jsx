"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll } from "framer-motion";
import { Column } from "@/app/components/Column/Column";
import styles from "./CaseGallery.module.scss";

const images = [
  "eleco.webp",
  "eleco-2.webp",
  "eleco.webp",
  "eleco-2.webp",
  "eleco-3.webp",
  "eleco-4.webp",
  "eleco-3.webp",
  "eleco-4.webp",
  "eleco.webp",
  "eleco-5.webp",
  "eleco.webp",
  "eleco-5.webp",
];

export const CaseGallery = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.7]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.caseContainer}>
        <div className={styles.cta}>
          <svg
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.7236 4.48352L3.98352 58.2236"
              stroke="white"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M44.2885 57.5165L3.62984 57.8701L3.9834 17.2114"
              stroke="white"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div ref={gallery} className={styles.galleryContainer}>
          <div className={styles.gallery}>
            <Column images={[images[0], images[1], images[2]]} y={y} />
            <Column images={[images[3], images[4], images[5]]} y={y2} />
            <Column images={[images[6], images[7], images[8]]} y={y3} />
            <Column images={[images[9], images[10], images[11]]} y={y4} />
          </div>
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};
