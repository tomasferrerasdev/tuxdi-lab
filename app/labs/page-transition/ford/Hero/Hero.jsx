"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import {
  titleAnimation,
  textAnimation,
  fadeInOverlay,
  imageZoom,
} from "./animations";

export const Hero = () => {
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    titleAnimation(titleRef.current);
    textAnimation(textRefs.current);
    fadeInOverlay(overlayRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div ref={overlayRef} className={styles.hero__overlay}></div>
        <Image
          priority
          fill
          className={styles.hero__image}
          src="/assets/case-preview/ford.jpg"
          alt=""
        />
        <div className={styles.hero__content}>
          <div className={styles.hero__titleWrapper}>
            <h1 className={styles.hero__title} ref={titleRef}>
              Ford Motorsports
            </h1>
          </div>
          <p className={styles.hero__text}>
            <span>
              <span ref={(text) => textRefs.current.push(text)}>
                Ford’s Journey in Automating their Agency Management
              </span>
            </span>
            <span>
              <span ref={(text) => textRefs.current.push(text)}>
                Process for Scopes of Work and Performance Evaluations
              </span>
            </span>
            <span>
              <span ref={(text) => textRefs.current.push(text)}>
                Organizational Success to Achieve Informed Marketing Investment
                Strategy
              </span>
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};
