"use client";

import React from "react";
import styles from "./subcomponent.module.css";
import pageStyles from "../page.module.css";

interface IButtonProps {
  item: string;
}

function button(props: IButtonProps) {
  function handleSubMenuButton(type: string) {
    const buttons = document.querySelectorAll(
      `.${pageStyles["sub-menu"]} > button`
    );
    buttons.forEach((button) => {
      if (button.textContent === type) {
        button.classList.add(styles["button-highlight"]);
      } else {
        button.classList.remove(styles["button-highlight"]);
      }
    });

    const stories = document.querySelectorAll(
      `.${pageStyles["stories-container"]} > a`
    );
    if (type === "all") {
      stories.forEach((story) => {
        story.classList.remove("hidden");
        story.classList.add("visible");
      });
      return;
    }
    stories.forEach((story) => {
      if (story.classList.contains(type)) {
        story.classList.remove("hidden");
        story.classList.add("visible");
      } else {
        story.classList.add("hidden");
        story.classList.remove("visible");
      }
    });
  }

  return (
    <button
      className={styles["sub-menu-button"]}
      onClick={() => handleSubMenuButton(props.item)}
    >
      {props.item}
    </button>
  );
}

export default button;
