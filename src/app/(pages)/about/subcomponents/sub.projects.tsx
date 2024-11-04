import React from "react";
import styles from "./subcomponent.module.css";
import Story from "@/app/components/story";
import Link from "next/link";
import { getMarkdownArray } from "@/app/utils/common";

async function Projects() {
  const projectsMarkdownList = await getMarkdownArray("projects");

  return (
    <>
      <Link className={styles["project-title"]} href={"/projects"}>
        <h3>Projects</h3>
      </Link>
      <section className={styles["project-content"]}>
        {projectsMarkdownList.map((item, i) => {
          if (item.data.featured === "true") {
            return (
              <Story
                key={i}
                title={item.data.title}
                thumbnailURL={item.data.thumbnail}
                caption={item.data.caption}
                content={item.data.description}
                date={item.data.date}
                link={item.data.link}
              />
            );
          } else {
            return <></>;
          }
        })}
      </section>
    </>
  );
}

export default Projects;
