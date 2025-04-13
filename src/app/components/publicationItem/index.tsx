import React from "react";
import styles from "./pages.module.css";

interface PublicationItemProps {
  data: {
    title: string;
    thumbnail: string;
    contributors: string[];
    venue: string;
    dateObject: Date;
    links: Record<string, string>;
  };
}

const PublicationItem: React.FC<PublicationItemProps> = ({ data }) => {
  return (
    <article className={styles["publications-article"]}>
      <div className={styles["publications-thumbnail"]}>
        <img
          src={data.thumbnail}
          alt="Thumbnail image of the paper"
          className={styles["publications-thumbnail-img"]}
        />
      </div>
      <div className={styles["publications-detail"]}>
        <h4 className={styles["publications-detail-title"]}>{data.title}</h4>
        <div className={styles["publications-details-authors"]}>
          {data.contributors.map((author: string, i: number) => (
            <p
              key={i}
              className={styles["publications-details-author-item"]}
              style={
                author === "Daeheon Jeong" || author === "Daeheon Jeong*"
                  ? { textDecoration: "underline" }
                  : {}
              }
            >
              {author}
            </p>
          ))}
        </div>
        <div className={styles["publications-details-other"]}>
          <p className={styles["publications-details-venue"]}>{data.venue}</p>
        </div>
        <div className={styles["publications-details-links"]}>
          <p className={styles["publications-details-date"]}>
            {data.dateObject.toLocaleString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
          <div className={styles["publications-details-links-container"]}>
            {Object.entries(data.links).map(([key, value], i) => (
              <a
                key={i}
                className={styles["publications-details-link-item"]}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PublicationItem;
