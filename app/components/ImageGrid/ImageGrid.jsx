import Image from "next/image";
import styles from "./ImageGrid.module.scss";
import { useEffect, useRef } from "react";
import {
  setInitialStates,
  moveSideImages,
  scaleCenterImage,
  moveUpTitle,
  introAnimation,
} from "./animations";

export const ImageGrid = ({ timeline }) => {
  const centerImageRef = useRef(null);
  const leftImagesRef = useRef([]);
  const rightImagesRef = useRef([]);
  const centerImageWrapperRef = useRef(null);
  const centerImageTitleRef = useRef(null);

  useEffect(() => {
    introAnimation(
      leftImagesRef.current,
      rightImagesRef.current,
      centerImageWrapperRef.current
    );

    timeline &&
      timeline
        .add(setInitialStates(centerImageRef.current))
        .add(moveSideImages(leftImagesRef.current, rightImagesRef.current))
        .add(
          scaleCenterImage(
            centerImageWrapperRef.current,
            centerImageRef.current
          ),
          "<"
        )
        .add(moveUpTitle(centerImageTitleRef.current), "<");
  }, [timeline]);

  return (
    <section className={styles.imageGrid}>
      <div className={styles.imageGrid__inner}>
        <div
          className={styles.imageGrid__imageWrapper}
          ref={(image) => leftImagesRef.current.push(image)}
        >
          <Image
            priority
            fill
            className={styles.imageGrid__image}
            src="/assets/case-preview/caf-event.jpg"
            alt=""
          />
        </div>
        <div className={styles.imageGrid__imageWrapper}></div>
        <div
          onClick={() => timeline.play()}
          className={styles.imageGrid__imageWrapper}
          ref={centerImageWrapperRef}
          data-wrapper-center
        >
          <div className={styles.textReveal}>
            <h2
              className={styles.imageGrid__imageTitle}
              ref={centerImageTitleRef}
            >
              CASE_01: Ford Motorsports
            </h2>
          </div>
          <Image
            ref={centerImageRef}
            priority
            fill
            data-image-center
            className={styles.imageGrid__image}
            src="/assets/case-preview/ford.jpg"
            alt=""
          />
        </div>
        <div
          className={styles.imageGrid__imageWrapper}
          ref={(image) => rightImagesRef.current.push(image)}
        >
          <Image
            priority
            fill
            className={styles.imageGrid__image}
            src="/assets/case-preview/caf-event.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
