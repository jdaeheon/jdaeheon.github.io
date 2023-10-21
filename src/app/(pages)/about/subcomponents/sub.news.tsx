import React from "react";
import styles from "./subcomponent.module.css";
import { ArrowIndicator } from "./sub.arrowIndicator";
import MarkdownWrapper from "@/app/components/markdownWrapper";
import { getMarkdownArray } from "@/app/utils/common";

async function News() {
  // const [isHover, setIsHover] = useState(false);
  const isHover = false;
  const newsMarkdownList = await getMarkdownArray("news");

  return (
    <>
      <a
        className={styles["news-title"]}
        // onMouseLeave={() => {
        //   if (isHover) setIsHover(false);
        // }}
        // onMouseEnter={() => {
        //   if (!isHover) setIsHover(true);
        // }}
        href={"https://google.com"}
      >
        <h3 className={isHover ? styles["underline"] : ""}>news</h3>
        <div
          className={`${styles["sub-title-more"]} ${
            isHover ? styles["visible"] : styles["hidden"]
          }`}
        >
          <ArrowIndicator />
        </div>
      </a>
      <section className={styles["news-content"]}>
        {newsMarkdownList.map((item, i) => (
          <article key={i} className={styles["news-item"]}>
            <p className={styles["news-item-text"]}>{item.data.title}</p>
            <MarkdownWrapper>{item.content}</MarkdownWrapper>
            <p className={styles["news-item-date"]}>{item.data.date}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default News;
