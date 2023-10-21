import React from "react";
import styles from "./page.module.css";
import Story from "@/app/components/story";
import News from "./subcomponents/sub.news";
import Projects from "./subcomponents/sub.projects";
import MarkdownWrapper from "@/app/components/markdownWrapper";
import { getMarkDownItem } from "@/app/utils/common";

async function About() {
  const coverLetter = await getMarkDownItem("static/cover.letter.md");

  return (
    <div className={styles.container}>
      <article className={styles["cover-letter"]}>
        <section className={styles["cover-letter-content"]}>
          <article className={styles["cover-letter-content-description"]}>
            <h3>Design · Research · Implement</h3>
            <MarkdownWrapper>{coverLetter.content}</MarkdownWrapper>
          </article>
          <article className={styles["cover-letter-content-link"]}>
            <h3>Links</h3>
            <a
              className={styles["cover-letter-content-link-item"]}
              href="https://google.com"
            >
              <u>Curriculum Vitae</u>
            </a>
            <a
              className={styles["cover-letter-content-link-item"]}
              href="https://github.com/jdaeheon"
            >
              <u>Github</u>
            </a>
            <a
              className={styles["cover-letter-content-link-item"]}
              href="mailto:neohgeek@gmail.com"
            >
              <u>Email</u>
            </a>
          </article>
          <article className={styles["cover-letter-content-aside"]}>
            <img
              src={"/profile.jpg"}
              className={styles["cover-letter-content-photo"]}
              alt="profile image of Daeheon Jeong"
            />
          </article>
        </section>
      </article>
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
