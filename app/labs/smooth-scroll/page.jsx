import { SmoothScroll } from "@/app/components/SmoothScroll/SmoothScroll";
import styles from "./page.module.scss";
import { Earth } from "@/app/components/Earth/Earth";

export default function SmoothScrollPage() {
  return (
    <SmoothScroll>
      <div className={styles.container}>
        <h1>WE DELIVER YOUR PROJECT TO THE MOON</h1>
        <Earth />
      </div>
    </SmoothScroll>
  );
}
