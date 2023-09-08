import { SmoothScroll } from "@/app/components/SmoothScroll/SmoothScroll";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("../../components/Earth/Earth"), {
  ssr: false,
  loading: () => <img src="/assets/placeholder.png"></img>,
});

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
