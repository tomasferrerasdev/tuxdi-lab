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
          <a href="/labs/page-transition">page-transitions</a>
          <a href="/labs/page-transition-wave">page-transition-wave</a>
          <a href="/labs/fullscreen-menu">fullscreen-menu</a>
          <a href="/labs/gravity">gravity</a>
          <a href="/labs/attraction">attraction</a>
          <a href="/labs/incredibly-squeezable-duck">
            incredibly-squeezable-duck
          </a>
        </div>
      </div>
    </main>
  );
}
