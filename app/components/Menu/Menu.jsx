import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { menuSlide } from "../Navbar/animations";
import styles from "./Menu.module.scss";
import { Curve } from "./Curve/Curve";
import { CustomLink, Link } from "./Link/Link";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Menu = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <>
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className={styles.menu}
      >
        <div className={styles.body}>
          <div
            onMouseLeave={() => {
              setSelectedIndicator(pathname);
            }}
            className={styles.nav}
          >
            {navItems.map((data, index) => {
              return (
                <CustomLink
                  key={index}
                  data={{ ...data, index }}
                  isActive={selectedIndicator == data.href}
                  setSelectedIndicator={setSelectedIndicator}
                ></CustomLink>
              );
            })}
          </div>
        </div>
        <Curve />
      </motion.div>
    </>
  );
};
