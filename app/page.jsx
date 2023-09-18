import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <h1>TUXDI LAB 🧪</h1>
        <div className={styles.navbarLinks}>
          <a href="/labs/magnetic-button">magnetic button</a>
          <a href="/labs/text-reveal">text reveal</a>
          <a href="/labs/smooth-scroll">three</a>
          <a href="/labs/three-plane">three-plane</a>
          <a href="/labs/car-showcase">car-showcase</a>
          <a href="/labs/case-gallery">case-gallery</a>
          <a href="/labs/page-transition">page-transition</a>
        </div>
      </div>
    </main>
  );
}
