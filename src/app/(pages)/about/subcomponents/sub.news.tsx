import React from "react";
import styles from "./subcomponent.module.css";
import { ArrowIndicator } from "./sub.arrowIndicator";
import MarkdownWrapper from "@/app/components/markdownWrapper";
import { getMarkdownArray } from "@/app/utils/common";
import Link from "next/link";

async function News() {
  const newsMarkdownList = await getMarkdownArray("news");

  return (
    <>
      <Link className={styles["news-title"]} href={"/news"}>
        <h3>news</h3>
        <div className={styles["sub-title-more"]}>
          <ArrowIndicator />
        </div>
      </Link>
      <section className={styles["news-content"]}>
        {newsMarkdownList.map((item, i) => (
          <article key={i} className={styles["news-item"]}>
            <p className={styles["news-item-title"]}>{item.data.title}</p>
            <MarkdownWrapper>{item.content}</MarkdownWrapper>
            <p className={styles["news-item-date"]}>{item.data.date}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default News;
