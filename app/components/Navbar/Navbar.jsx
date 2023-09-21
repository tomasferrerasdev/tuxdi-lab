"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu } from "../Menu/Menu";
import styles from "./Navbar.module.scss";

export const Navbar = ({ onMouseEnter, onMouseLeave }) => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.header}>
          <button
            onClick={() => setIsActive(!isActive)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Menu />}</AnimatePresence>
    </>
  );
};
