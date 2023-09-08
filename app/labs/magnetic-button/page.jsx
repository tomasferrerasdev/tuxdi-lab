import { MagneticCursor } from "@/app/components/MagneticCursor/MagneticCursor";
import styles from "./page.module.scss";

export default function MagneticPage() {
  return (
    <div className={styles.container}>
      <MagneticCursor>
        <div className={styles.textContainer}>
          <h1>TUXDI</h1>
        </div>
      </MagneticCursor>
    </div>
  );
}
