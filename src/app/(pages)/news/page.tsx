import MarkdownWrapper from "@/app/components/markdownWrapper";
import { buildDate, getMarkdownArray } from "@/app/utils/common";
import styles from "./page.module.css";
import React from "react";

async function News() {
  const newsMarkdownList = await getMarkdownArray("news");
  return (
    <section className={styles["container"]}>
      <h3>news</h3>
      {newsMarkdownList.map((item, i) => {
        return (
          <article key={i} className={styles["news-article"]}>
            <div className={styles["news-header"]}>
              <p className={styles["news-title"]}>{item.data.title}</p>
              <p className={styles["news-date"]}>{item.data.date}</p>
            </div>
            <MarkdownWrapper>{item.content}</MarkdownWrapper>
          </article>
        );
      })}
      <article className={styles["news-footer"]}>
        {`Lasted updated on ${buildDate}`}
        {/* {`Lasted updated on ${process.env.UPDATE_DATE}`} */}
      </article>
    </section>
  );
}

export default News;
