import React from "react";
import styles from "./page.module.css";
import News from "./subcomponents/sub.news";
import Projects from "./subcomponents/sub.projects";
import MarkdownWrapper from "@/app/components/markdownWrapper";
import { getMarkDownItem } from "@/app/utils/common";
import Link from "next/link";

async function About() {
  const coverLetter = await getMarkDownItem("static/cover.letter.md");
  return (
    <div className={styles.container}>
      <section className={styles["cover-letter"]}>
        <article className={styles["cover-letter-description"]}>
          <h3>design · research · implement</h3>
          <MarkdownWrapper>{coverLetter.content}</MarkdownWrapper>
        </article>
        <article className={styles["cover-letter-link"]}>
          <h3>links</h3>
          <Link className={styles["cover-letter-link-item"]} href="/cv.pdf">
            <u>Curriculum Vitae</u>
          </Link>
          <a
            className={styles["cover-letter-link-item"]}
            href="https://github.com/jdaeheon"
          >
            <u>Github</u>
          </a>
          <a
            className={styles["cover-letter-link-item"]}
            href="mailto:neohgeek@gmail.com"
          >
            <u>Email</u>
          </a>
        </article>
        <article className={styles["cover-letter-aside"]}>
          <img
            src={"/profile.jpg"}
            className={styles["cover-letter-photo"]}
            alt="profile image of Daeheon Jeong"
          />
        </article>
      </section>
      <div className={styles["article-divider-container"]}>
        <div className={styles["article-divider"]}></div>
      </div>
      <article className={styles["news"]}>
        <News />
      </article>
      <div className={styles["article-divider-container"]}>
        <div className={styles["article-divider"]}></div>
      </div>
      <article className={styles["projects"]}>
        <Projects />
      </article>
    </div>
  );
}

export default About;
