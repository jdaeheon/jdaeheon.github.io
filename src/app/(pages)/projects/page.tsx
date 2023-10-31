import React from "react";
import styles from "./page.module.css";
import { PiCaretDownLight } from "react-icons/pi";
import { getMarkdownArray } from "@/app/utils/common";
import Story from "@/app/components/story";

async function Projects() {
  const projectsMarkdownList = await getMarkdownArray("projects");

  return (
    <section className={styles["container"]}>
      <div className={styles["container-header"]}>
        <h3>projects</h3>
        <button className={styles["filter-button"]}>
          all <PiCaretDownLight />
        </button>
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
        Last updated on Oct 31, 2023 (on progress)
      </article>
    </section>
  );
}

export default Projects;
