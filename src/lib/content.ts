import fs from "node:fs/promises";
import path from "node:path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { parse as parseYaml } from "yaml";
import { formatFullDate } from "./html";
import type { ImageResolver } from "./images";
import type { ContentItem, Frontmatter } from "./types";

export async function readMarkdownList<T extends Frontmatter = Frontmatter>(
  contentDir: string,
  folder: string,
  imageResolver?: ImageResolver
): Promise<ContentItem<T>[]> {
  const directory = path.join(contentDir, folder);
  const files = (await fs.readdir(directory)).filter((file) => file.endsWith(".md"));
  const items = await Promise.all(
    files.map((file) => readMarkdownFile<T>(contentDir, `${folder}/${file}`, imageResolver))
  );

  return items.sort((a, b) => b.data.dateObject.getTime() - a.data.dateObject.getTime());
}

export async function readMarkdownFile<T extends Frontmatter = Frontmatter>(
  contentDir: string,
  relativePath: string,
  imageResolver?: ImageResolver
): Promise<ContentItem<T>> {
  const filePath = path.join(contentDir, relativePath);
  const source = await fs.readFile(filePath, "utf8");
  const parsed = parseFrontmatter<T>(source);
  const dateObject = new Date(String(parsed.data.date || ""));
  const html = await markdownToHtml(parsed.content);

  return {
    data: {
      ...(parsed.data as T),
      dateObject,
      date: Number.isNaN(dateObject.getTime()) ? "" : formatFullDate(dateObject),
    },
    content: parsed.content,
    html: imageResolver?.addDimensionsToHtml(html) || html,
    file: relativePath,
  };
}

function parseFrontmatter<T extends Frontmatter>(source: string): {
  data: T;
  content: string;
} {
  if (!source.startsWith("---")) {
    return { data: {} as T, content: source };
  }

  const endIndex = source.indexOf("\n---", 3);
  if (endIndex === -1) {
    throw new Error("Frontmatter is missing closing ---");
  }

  const yaml = source.slice(3, endIndex).trim();
  const content = source.slice(endIndex + 4).trimStart();

  return {
    data: (parseYaml(yaml) || {}) as T,
    content,
  };
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(markdown);

  return String(result);
}
