import React from "react";
import styles from "./subcomponent.module.css";

export function ArrowIndicator() {
  return (
    <div className={styles["sub-title-more-svg-container"]}>
      <svg
        // class="arrow-svg"
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="10"
        viewBox="0 0 100 5"
      >
        <line
          x1="0"
          y1="2.5"
          x2="100"
          y2="2.5"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="0.5"
        />
        <line
          x1="97.5"
          y1="5"
          x2="100"
          y2="2.5"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="0.5"
        />
        <line
          x1="97.5"
          y1="0"
          x2="100"
          y2="2.5"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}
