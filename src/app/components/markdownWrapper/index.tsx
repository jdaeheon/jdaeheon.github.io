import React, { ReactNode } from "react";
import Markdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import remarkRehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./index.module.css";

type RemarkComponentProps = ExtraProps & {
  children?: string | string[];
  className?: string;
};

const markdownWrapperComponents = {
  a(props: ExtraProps) {
    const { node, ...rest } = props;
    return <a className={styles["markdown-a"]} {...rest} />;
  },
  p(props: ExtraProps) {
    const { node, ...rest } = props;
    return <p className={styles["markdown-p"]} {...rest} />;
  },
  h1(props: ExtraProps) {
    const { node, ...rest } = props;
    return <h1 className={styles["markdown-h1"]} {...rest} />;
  },
  h2(props: ExtraProps) {
    const { node, ...rest } = props;
    return <h2 className={styles["markdown-h2"]} {...rest} />;
  },
  h3(props: ExtraProps) {
    const { node, ...rest } = props;
    return <h3 className={styles["markdown-h3"]} {...rest} />;
  },
  h4(props: ExtraProps) {
    const { node, ...rest } = props;
    return <h4 className={styles["markdown-h4"]} {...rest} />;
  },
  h5(props: ExtraProps) {
    const { node, ...rest } = props;
    return <h5 className={styles["markdown-h5"]} {...rest} />;
  },
  ul(props: ExtraProps) {
    const { node, ...rest } = props;
    return <ul className={styles["markdown-ul"]} {...rest} />;
  },
  li(props: ExtraProps) {
    const { node, ...rest } = props;
    return <li className={styles["markdown-li"]} {...rest} />;
  },
  img(props: ExtraProps) {
    const { node, ...rest } = props;
    return <img className={styles["markdown-img"]} {...rest} />;
  },
  blockquote(props: ExtraProps) {
    const { node, ...rest } = props;
    return <blockquote className={styles["markdown-blockquote"]} {...rest} />;
  },
  // code(props: RemarkComponentProps) {
  //   const { node, children, className, ...rest } = props;
  //   const match = /language-(\w+)/.exec(className || "");
  //   return (
  //     <SyntaxHighlighter
  //       {...rest}
  //       style={dark}
  //       language={match ? match[1] : ""}
  //       PreTag="div"
  //       // eslint-disable-next-line react/no-children-prop
  //       children={children || ""}
  //     />
  // <code {...rest} className={className}>
  //   {children}
  // </code>
  // );
  // return match ? (
  //   <SyntaxHighlighter
  //     {...rest}
  //     style={dark}
  //     language={match[1]}
  //     PreTag="div"
  //   >
  //     {String(children).replace(/\n$/, "")}
  //   </SyntaxHighlighter>
  // ) : (
  //   <code {...rest} className={className}>
  //     {children}
  //   </code>
  // );
  // },
};

interface IMarkdownWrapper {
  children: string | null | undefined;
}

function MarkdownWrapper({ children }: IMarkdownWrapper) {
  return (
    <Markdown
      components={markdownWrapperComponents}
      remarkPlugins={[remarkRehype, remarkRehypeRaw, remarkGfm]}
    >
      {children}
    </Markdown>
  );
}

export default MarkdownWrapper;
