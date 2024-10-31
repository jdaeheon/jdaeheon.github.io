"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import Link from "next/link";

interface IStoryProps {
  title: string;
  thumbnailURL: string;
  caption: string;
  content: string;
  date: string;
  link: string;
  filterClassName?: string;
}

function Story(props: IStoryProps) {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      className={`${styles["story-container"]} ${props.filterClassName}`}
      href={`/projects/${props.link}`}
      onMouseEnter={() => {
        if (!isHover) setIsHover(true);
      }}
      onMouseLeave={() => {
        if (isHover) setIsHover(false);
      }}
    >
      <figure className={styles["story-figure"]}>
        <img
          src={props.thumbnailURL}
          className={styles["story-image"]}
          alt={props.caption}
        />
      </figure>
      <div className={styles["story-item"]}>
        <h5
          className={`${styles["story-title"]} ${
            isHover ? styles["underline"] : ""
          }`}
        >
          {props.title}
        </h5>
        <p className={styles["story-content"]}>{props.content}</p>
        <div className={styles["story-endnote"]}>
          <p className={styles["story-date"]}>{props.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default Story;
