import React from "react";
import { Merriweather } from "next/font/google";
import styles from "./pages.module.css";

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.header}>
          <h1 className={styles["header-title"]}>Daeheon Jeong</h1>
          <button className={styles["header-button"]}>about</button>
          <button className={styles["header-button"]}>projects</button>
          <button className={styles["header-button"]}>publications</button>
          <button className={styles["header-button"]}>news</button>
        </nav>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}></div>
      </div>
    </main>
  );
}

export default PageLayout;
