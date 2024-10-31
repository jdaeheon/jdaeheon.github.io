"use client";

import React from "react";
import styles from "./pages.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

function isActive(moduleName: string, pathName: string) {
  return moduleName === pathName ? styles["header-button-active"] : "";
}

function PageLayout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname().replace(/^\/+/, "");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img
          src={"/thumbnail.png"}
          className={styles["header-hidden-thumbnail"]}
          alt="hidden thumbnail"
        />
        <nav className={styles.header}>
          <h1 className={styles["header-title"]}>
            Daeheon
            <br />
            Jeong
          </h1>
          <Link
            className={`${styles["header-button"]} ${isActive("", pathName)}`}
            href="/"
          >
            about
          </Link>
          <Link
            className={`${styles["header-button"]} ${isActive(
              "news",
              pathName
            )}`}
            href="/news"
          >
            news
          </Link>
          <Link
            className={`${styles["header-button"]} ${isActive(
              "projects",
              pathName
            )}`}
            href="/projects"
          >
            projects
          </Link>
          <Link
            className={`${styles["header-button"]} ${isActive(
              "publications",
              pathName
            )}`}
            href="/publications"
          >
            publications
          </Link>
        </nav>
        <div className={styles.body}>{children}</div>
        <footer className={styles.footer}></footer>
      </div>
    </main>
  );
}

export default PageLayout;
