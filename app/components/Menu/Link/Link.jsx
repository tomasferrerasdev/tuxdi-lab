import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../Navbar/animations";
import styles from "./Link.module.scss";

export const CustomLink = ({ data, setSelectedIndicator }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
