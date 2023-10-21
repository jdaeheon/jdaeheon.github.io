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

// code idea fro

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
      const content = fs.readFileSync(postDirectory, "utf-8");
      return matter(content);
    });
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
  return markdown;
}
