"use client";

import React, { useState } from "react";
import styles from "./subcomponent.module.css";
import { ArrowIndicator } from "./sub.arrowIndicator";
import Story from "@/app/components/story";

const fakeImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1362px-Placeholder_view_vector.svg.png";

const fakeData = [
  {
    title: "Exploring the Enchanted Forest",
    thumbnailURL: fakeImage,
    caption: "A magical journey through a mystical forest",
    content:
      "Once upon a time, in a land far, far away, there existed an enchanted forest...",
    date: "Jan 1, 2023",
  },
  {
    title: "The Science of Time Travel",
    thumbnailURL: fakeImage,
    caption: "Unraveling the secrets of traveling through time",
    content:
      "Time travel has been a topic of fascination for generations, but is it really possible? Let's explore the science behind this intriguing concept...",
    date: "Jan 15, 2023",
  },
  {
    title: "The Culinary Adventures of Chef Julia",
    thumbnailURL: fakeImage,
    caption: "A gastronomic journey with a master chef",
    content:
      "Join Chef Julia on a culinary journey that will tantalize your taste buds and transport you to the world of exquisite flavors...",
    date: "Feb 22, 2023",
  },
  {
    title: "In Search of Lost Treasures",
    thumbnailURL: fakeImage,
    caption: "Uncovering the mysteries of lost civilizations",
    content:
      "From ancient relics to hidden treasures, the quest for lost artifacts has captivated adventurers for centuries. Follow our expedition as we venture into the unknown...",
    date: "Mar 1, 2023",
  },
  {
    title: "The Art of Mindfulness",
    thumbnailURL: fakeImage,
    caption: "Discover the path to inner peace and happiness",
    content:
      "In a world filled with distractions and stress, mindfulness offers a way to find serenity and contentment. Learn the art of mindfulness and transform your life...",
    date: "Jun 5, 2023",
  },
];

function Projects() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <a
        className={styles["project-title"]}
        onMouseLeave={() => {
          if (isHover) setIsHover(false);
        }}
        onMouseEnter={() => {
          if (!isHover) setIsHover(true);
        }}
        href={"https://google.com"}
      >
        <h3 className={isHover ? styles["underline"] : ""}>projects</h3>
        <div
          className={`${styles["sub-title-more"]} ${
            isHover ? styles["visible"] : styles["hidden"]
          }`}
        >
          <ArrowIndicator />
        </div>
      </a>
      <section className={styles["project-content"]}>
        {fakeData.map((data, i) => (
          <Story key={i} {...data} />
        ))}
      </section>
    </>
  );
}

export default Projects;
