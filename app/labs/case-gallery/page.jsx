"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll } from "framer-motion";
import { Column } from "@/app/components/Column/Column";
import styles from "./page.module.scss";

const images = [
  "eleco-first.webp",
  "eleco-2.png",
  "eleco.png",
  "eleco-2.png",
  "eleco-3.png",
  "eleco-4.png",
  "eleco-3.png",
  "eleco-4.png",
  "eleco-first.webp",
  "eleco-5.png",
  "eleco.png",
  "eleco-5.png",
];

export default function CaseGalleryPage() {
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
      <div className={styles.spacer}>
        <h1>El Eco</h1>
        <p>
          We developed a customized platform from scratch, improving the reading
          experience and navigability of the preexisting site. This platform is
          characterized by its speed, cleanness, and intuitive design; it has
          98% performance in SEO.
        </p>
      </div>
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
}
