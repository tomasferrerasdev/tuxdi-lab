import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navbar}>
        <a href="/labs/magnetic-button">magnetic button</a>
        <a href="/labs/text-reveal">text reveal</a>
      </div>
    </main>
  );
}
