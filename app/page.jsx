import styles from "./page.module.scss";
import { MagneticCursor } from "./components/MagneticCursor/MagneticCursor";

export default function Home() {
  return (
    <main className={styles.main}>
      <MagneticCursor>
        <div className={styles.textContainer}>
          <h1>TUXDI</h1>
        </div>
      </MagneticCursor>
    </main>
  );
}
