import { assetPath, escapeAttr, escapeHtml } from "../lib/html";
import type { ImageResolver } from "../lib/images";
import type { ContentItem, ProjectData } from "../lib/types";
import { layout } from "./layout";

export function renderProjects(
  projects: ContentItem<ProjectData>[],
  buildDate: string,
  imageResolver: ImageResolver,
  analyticsId?: string
): string {
  const categories = [
    "all",
    ...Array.from(new Set([...projects].reverse().map((item) => item.data.type).filter(Boolean))),
  ];

  const filters = categories
    .map(
      (category, index) => `
        <button
          class="text-button sub-menu-button${index === 0 ? " button-highlight" : ""}"
          type="button"
          data-project-filter="${escapeAttr(category)}"
          aria-pressed="${index === 0 ? "true" : "false"}"
        >
          ${escapeHtml(category)}
        </button>
      `
    )
    .join("");

  return layout({
    route: "projects",
    analyticsId,
    content: `
      <section class="section-container">
        <div class="projects-header">
          <h3>Projects</h3>
          <div class="sub-menu" aria-label="Project filters">${filters}</div>
        </div>
        <div class="stories-container">${projects.map((project) => renderStoryCard(project, imageResolver)).join("")}</div>
        <article class="page-footer">Lasted updated on ${buildDate}</article>
      </section>
    `,
    script: true,
  });
}

export function renderProjectDetail(
  project: ContentItem<ProjectData>,
  analyticsId?: string
): string {
  const data = project.data;

  return layout({
    route: "projects",
    analyticsId,
    content: `
      <section class="project-detail-container">
        <section class="project-detail-title">
          <h3 class="project-heading-title">${escapeHtml(data.title)}</h3>
          <h3 class="project-heading-description">${escapeHtml(data.description)}</h3>
        </section>
        <article class="project-detail-article markdown">${project.html}</article>
      </section>
    `,
  });
}

function renderStoryCard(project: ContentItem<ProjectData>, imageResolver: ImageResolver): string {
  const data = project.data;
  const thumbnail = assetPath(data.thumbnail);

  return `
    <a
      class="story-container"
      href="/projects/${escapeAttr(data.link)}/"
      data-project-type="${escapeAttr(data.type)}"
    >
      <figure class="story-figure">
        <img src="${escapeAttr(thumbnail)}"${imageResolver.dimensionsAttrs(thumbnail)} class="story-image" alt="${escapeAttr(data.caption)}">
      </figure>
      <div class="story-item">
        <h5 class="story-title">${escapeHtml(data.title)}</h5>
        <p class="story-content">${escapeHtml(data.description)}</p>
        <div class="story-endnote">
          <p class="story-date">${escapeHtml(String(data.date || ""))}</p>
        </div>
      </div>
    </a>
  `;
}
