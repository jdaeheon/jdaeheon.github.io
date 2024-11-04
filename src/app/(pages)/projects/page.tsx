import React from "react";
import styles from "./page.module.css";
import { buildDate, getMarkdownArray } from "@/app/utils/common";
import Story from "@/app/components/story";
import Button from "./subcomponent/sub.button";

async function Projects() {
  const projectsMarkdownList = await getMarkdownArray("projects");
  const projectCategories = Array.from(
    new Set(
      projectsMarkdownList
        .map((item) => item.data.type)
        .concat("all")
        .reverse()
    )
  );

  return (
    <section className={styles["container"]}>
      <div className={styles["container-header"]}>
        <h3>Projects</h3>
        <div className={styles["sub-menu"]}>
          {projectCategories.map((item, i) => (
            <Button item={item} key={i} />
          ))}
        </div>
      </div>
      <div className={styles["stories-container"]}>
        {projectsMarkdownList.map((item, i) => (
          <Story
            key={i}
            title={item.data.title}
            thumbnailURL={item.data.thumbnail}
            caption={item.data.caption}
            content={item.data.description}
            date={item.data.date}
            link={item.data.link}
            filterClassName={item.data.type}
          />
        ))}
      </div>
      <article className={styles["project-footer"]}>
        {`Lasted updated on ${buildDate}`}
      </article>
    </section>
  );
}

export default Projects;
