import React from "react";
import styles from "./page.module.css";
import News from "./subcomponents/sub.news";
import Publications from "../publications/page";
import MarkdownWrapper from "@/app/components/markdownWrapper";
import { getMarkDownItem } from "@/app/utils/common";
import Link from "next/link";
import SubPublications from "./subcomponents/sub.publications";

async function About() {
  const coverLetter = await getMarkDownItem("static/cover.letter.md");
  return (
    <div className={styles.container}>
      <section className={styles["cover-letter"]}>
        <article className={styles["cover-letter-description"]}>
          <h3>Introduction</h3>
          <MarkdownWrapper>{coverLetter.content}</MarkdownWrapper>
          <nav className={styles["cover-letter-link"]} aria-label="Profile links">
            <Link
              className={`${styles["cover-letter-link-item"]} text-button`}
              href="/cv.pdf"
            >
              CV
            </Link>
            <a
              className={`${styles["cover-letter-link-item"]} text-button`}
              href="https://github.com/jdaeheon"
            >
              Github
            </a>
            <a
              className={`${styles["cover-letter-link-item"]} text-button`}
              href="https://www.linkedin.com/in/daeheon-jeong"
            >
              LinkedIn
            </a>
            <a
              className={`${styles["cover-letter-link-item"]} text-button`}
              href="mailto:neohgeek@gmail.com"
            >
              Email
            </a>
          </nav>
        </article>
        <article className={styles["cover-letter-aside"]}>
          <img
            src={"/profile.jpg"}
            className={styles["cover-letter-photo"]}
            alt="profile image of Daeheon Jeong"
          />
        </article>
      </section>
      <article className={styles["publications"]}>
        <SubPublications />
      </article>
    </div>
  );
}

export default About;
