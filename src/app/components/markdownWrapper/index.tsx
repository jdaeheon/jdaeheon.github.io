import React, { ReactNode } from "react";
import Markdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./index.module.css";

const markdownWrapperComponents = {
  a(props: ExtraProps) {
    const { node, ...rest } = props;
    return <a className={styles["markdown-a"]} {...rest} />;
  },
};

interface IMarkdownWrapper {
  children: string | null | undefined;
}

function MarkdownWrapper({ children }: IMarkdownWrapper) {
  return (
    <Markdown
      components={markdownWrapperComponents}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </Markdown>
  );
}

export default MarkdownWrapper;
