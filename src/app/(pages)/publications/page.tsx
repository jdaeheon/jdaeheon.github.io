import React from "react";
import styles from "./page.module.css";
import { getMarkdownArray } from "@/app/utils/common";

async function Publications() {
  const publicationList = await getMarkdownArray("publications");

  return (
    <section className={styles["container"]}>
      <div className={styles["container-header"]}>
        <h3>publications</h3>
      </div>
      {publicationList.map((item, i) => {
        return (
          <article key={i} className={styles["publications-article"]}>
            <div className={styles["publications-thumbnail"]}>
              <img
                src={item.data.thumbnail}
                alt="Thumbnail image of the paper"
                className={styles["publications-thumbnail-img"]}
              />
            </div>
            <div className={styles["publications-detail"]}>
              <h4 className={styles["publications-detail-title"]}>
                {item.data.title}
              </h4>
              <div className={styles["publications-details-authors"]}>
                {item.data.contributors.map((author: string, i: number) => (
                  <p
                    key={i}
                    className={styles["publications-details-author-item"]}
                    style={
                      author === "Daeheon Jeong"
                        ? { fontStyle: "italic", textDecoration: "underline" }
                        : {}
                    }
                  >
                    {author}
                  </p>
                ))}
              </div>
              <div className={styles["publications-details-other"]}>
                <p className={styles["publications-details-venue"]}>
                  {item.data.venue}
                </p>
                <p className={styles["publications-details-date"]}>
                  {(item.data.dateObject as Date).toLocaleString("en-US", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
              </div>
              <div className={styles["publications-details-links"]}>
                {Object.entries(item.data.links).map(([key, value], i) => (
                  <a
                    key={i}
                    className={styles["publications-details-link-item"]}
                    href={value as string}
                  >
                    {key}
                  </a>
                ))}
              </div>
            </div>
          </article>
        );
      })}
      <article className={styles["project-footer"]}>
        {`Lasted updated on ${process.env.UPDATE_DATE}`}
      </article>
    </section>
  );
}

export default Publications;
