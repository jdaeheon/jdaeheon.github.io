import path from "path";
import fs from "fs";
import matter from "gray-matter";

export interface IArticleMarkdown {
  date: string;
  title: string;
  thumbnail: string;
  featured: string;
  content: string;
}

/**
 * Get array of markdown from given location
 * @linkplain https://github.com/vercel/next.js/issues/51860
 * @linkplain https://stackoverflow.com/questions/72461828/how-to-get-exports-form-mdx-in-nextjs
 * @param location folder location under src/data/markdown
 * @returns
 */
export async function getMarkdownArray(location: string) {
  const directory = path.join(process.cwd(), "src/data/markdown", location);
  const list = fs.readdirSync(directory);
  const markdownList = list
    .filter((item) => item.endsWith(".md"))
    .map((item) => {
      const postDirectory = path.join(directory, item);
      const contentString = fs.readFileSync(postDirectory, "utf-8");
      const content = matter(contentString);
      content.data.dateObject = new Date(content.data.date);
      content.data.date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(content.data.dateObject);
      return content;
    })
    .sort((a, b) => b.data.dateObject.getTime() - a.data.dateObject.getTime());

  // const markdownListSorted = markdownList.sort(
  //   (a, b) => a.data.date.getTime() - b.data.date.getTime()
  // );
  return markdownList;
}

/**
 * Get markdown item from given location
 * @param location file location uder src/data/markdown
 * @returns
 */
export async function getMarkDownItem(location: string) {
  const directory = path.join(process.cwd(), "src/data/markdown", location);
  const content = fs.readFileSync(directory, "utf-8");
  const markdown = matter(content);
  markdown.data.dateObject = new Date(markdown.data.date);
  markdown.data.date = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(markdown.data.dateObject);

  return markdown;
}
