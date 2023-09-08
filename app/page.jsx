import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1>TUXDI LAB 🧪</h1>
        <div className={styles.navbarLinks}>
          <a href="/labs/magnetic-button">magnetic button</a>
          <a href="/labs/text-reveal">text reveal</a>
        </div>
      </div>
    </main>
  );
}
