import React from "react";
import styles from "./subcomponent.module.css";
import { ArrowIndicator } from "./sub.arrowIndicator";
import Story from "@/app/components/story";
import Link from "next/link";
import { getMarkdownArray } from "@/app/utils/common";

async function Projects() {
  const projectsMarkdownList = await getMarkdownArray("projects");

  return (
    <>
      <Link className={styles["project-title"]} href={"/projects"}>
        <h3>projects</h3>
        <div className={styles["sub-title-more"]}>
          <ArrowIndicator />
        </div>
      </Link>
      <section className={styles["project-content"]}>
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
      </section>
    </>
  );
}

export default Projects;
