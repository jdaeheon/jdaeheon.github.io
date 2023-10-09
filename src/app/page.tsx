import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <p>The page currently is under a major revision</p>
        <p>Apologies for the inconvenience</p>
        <p>
          - Daeheon Jeong,{" "}
          <u>
            <a href="https://github.com/jdaeheon">[github]</a>
          </u>
        </p>
      </div>
      <div className={styles.footer}></div>
    </main>
  );
}
