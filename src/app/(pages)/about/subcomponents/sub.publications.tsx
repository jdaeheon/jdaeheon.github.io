import React from "react";
import styles from "./subcomponent.module.css";
import { buildDate, getMarkdownArray } from "@/app/utils/common";
import PublicationItem from "@/app/components/publicationItem";
import { PublicationItemData } from "@/app/types";

async function SubPublications() {
  const markdownArray = await getMarkdownArray("publications");
  const publicationList: PublicationItemData[] = markdownArray.map((item) => ({
    data: {
      title: item.data.title || "",
      thumbnail: item.data.thumbnail || "",
      contributors: item.data.contributors || [],
      venue: item.data.venue || "",
      dateObject: item.data.dateObject || new Date(),
      links: item.data.links || {},
      type: item.data.type || 0,
    },
    content: item.content,
  }));

  const mainPapers = publicationList.filter((item) => item.data.type === 0);
  const subPapers = publicationList.filter((item) => item.data.type === 1);

  return (
    <section className={styles["publication-container"]}>
      <div className={styles["publication-container-header"]}>
        <h3>Publications</h3>
      </div>
      <div className={styles["publication-container-sub-header"]}>
        <h4>Conference Papers</h4>
      </div>
      {mainPapers.map((item, i) => (
        <PublicationItem key={i} data={item.data} />
      ))}
      <div className={styles["publication-container-sub-header"]}>
        <h4>Posters, Demos, Workshop Papers</h4>
      </div>
      {subPapers.map((item, i) => (
        <PublicationItem key={i} data={item.data} />
      ))}
    </section>
  );
}

export default SubPublications;
