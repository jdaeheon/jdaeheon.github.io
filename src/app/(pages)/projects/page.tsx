import React from "react";
import styles from "./page.module.css";
import { PiCaretDownLight } from "react-icons/pi";
import { buildDate, getMarkdownArray } from "@/app/utils/common";
import Story from "@/app/components/story";

async function Projects() {
  const projectsMarkdownList = await getMarkdownArray("projects");
  return (
    <section className={styles["container"]}>
      <div className={styles["container-header"]}>
        <h3>projects</h3>
        {/* <div className={styles["dropdown"]}>
          <button className={styles["filter-button"]}>all</button>
          <button className={styles["filter-button"]}>project</button>
          <button className={styles["filter-button"]}>research</button>
          <button className={styles["filter-button"]}>service</button>
        </div> */}
      </div>
      {projectsMarkdownList.map((item, i) => (
        <Story
          key={i}
          title={item.data.title}
          thumbnailURL={item.data.thumbnail}
          caption={item.data.caption}
          content={item.data.description}
          date={item.data.date}
          link={item.data.link}
        />
      ))}
      <article className={styles["project-footer"]}>
        {`Lasted updated on ${buildDate}`}
      </article>
    </section>
  );
}

export default Projects;
