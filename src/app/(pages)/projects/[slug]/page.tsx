import React from "react";
import { getMarkdownArray } from "@/app/utils/common";
import styles from "./page.module.css";
import MarkdownWrapper from "@/app/components/markdownWrapper";

export async function generateStaticParams() {
  const projectsMarkdownList = await getMarkdownArray("projects");
  return projectsMarkdownList.map((item) => ({ slug: item.data.link }));
}

interface IProjectProps {
  params: {
    slug: string;
  };
}

async function Project({ params }: IProjectProps) {
  const [{ data, content }] = (await getMarkdownArray("projects")).filter(
    (item) => item.data.link === params.slug
  );

  return (
    <section className={styles["container"]}>
      <h3 className={styles["container-title"]}>{data.title}</h3>
      <article className={styles["container-article"]}>
        <MarkdownWrapper>{content}</MarkdownWrapper>
      </article>
    </section>
  );
}

export default Project;
