import { motion } from "framer-motion";
import styles from "./Column.module.scss";
import Image from "next/image";

export const Column = ({ images, y }) => {
  return (
    <>
      <motion.div className={styles.column} style={{ y }}>
        {images.map((src, i) => {
          return (
            <div key={i} className={styles.imageContainer}>
              <Image src={`/assets/cases/${src}`} alt="image" fill />
            </div>
          );
        })}
      </motion.div>
    </>
  );
};
