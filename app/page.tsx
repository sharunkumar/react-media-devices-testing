import MediaDevices from "./devices";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <MediaDevices />
      </div>
    </main>
  );
}
