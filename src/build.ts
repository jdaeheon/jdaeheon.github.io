import path from "node:path";
import { readMarkdownFile, readMarkdownList } from "./lib/content";
import { createImageResolver } from "./lib/images";
import { bundleBrowserScript, copyFile, copyStaticAssets, resetOutput, writePage } from "./lib/output";
import type { ProjectData, PublicationData } from "./lib/types";
import { renderAbout } from "./templates/about";
import { renderNews } from "./templates/news";
import { renderProjectDetail, renderProjects } from "./templates/projects";
import { renderPublications } from "./templates/publications";

const rootDir = process.cwd();
const contentDir = path.join(rootDir, "content");
const publicDir = path.join(rootDir, "public");
const outDir = path.join(rootDir, "out");
const imageResolver = createImageResolver(publicDir);
const analyticsId = process.env.NEXT_PUBLIC_GA_ID;
const buildDate = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
}).format(new Date());

async function main() {
  const [coverLetter, projects, publications, news] = await Promise.all([
    readMarkdownFile(contentDir, "static/cover.letter.md", imageResolver),
    readMarkdownList<ProjectData>(contentDir, "projects", imageResolver),
    readMarkdownList<PublicationData>(contentDir, "publications", imageResolver),
    readMarkdownList(contentDir, "news", imageResolver),
  ]);

  await resetOutput(outDir);
  await copyStaticAssets({ rootDir, publicDir, outDir });
  await copyFile(path.join(rootDir, "src/styles/global.css"), path.join(outDir, "styles.css"));
  await bundleBrowserScript(rootDir, outDir);

  const aboutHtml = renderAbout(coverLetter, publications, buildDate, imageResolver, analyticsId);
  await writePage(outDir, "", aboutHtml);
  await writePage(outDir, "about", aboutHtml);
  await writePage(outDir, "news", renderNews(news, buildDate, analyticsId));
  await writePage(outDir, "projects", renderProjects(projects, buildDate, imageResolver, analyticsId));
  await writePage(
    outDir,
    "publications",
    renderPublications(publications, buildDate, true, imageResolver, analyticsId)
  );

  await Promise.all(
    projects.map((project) => {
      if (!project.data.link) {
        throw new Error(`Project is missing link frontmatter: ${project.file}`);
      }

      return writePage(
        outDir,
        `projects/${project.data.link}`,
        renderProjectDetail(project, analyticsId)
      );
    })
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
