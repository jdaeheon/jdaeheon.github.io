import { assetPath, escapeAttr, escapeHtml, formatMonthYear } from "../lib/html";
import type { ImageResolver } from "../lib/images";
import type { ContentItem, PublicationData } from "../lib/types";
import { layout } from "./layout";

export function renderPublications(
  publications: ContentItem<PublicationData>[],
  buildDate: string,
  fullPage: boolean,
  imageResolver: ImageResolver,
  analyticsId?: string
): string {
  const mainPapers = publications.filter((item) => Number(item.data.type) === 0);
  const subPapers = publications.filter((item) => Number(item.data.type) === 1);

  const content = `
    <section class="${fullPage ? "section-container" : "publication-container"}">
      <div class="publication-container-header">
        <h3>Publications</h3>
      </div>
      <div class="publication-container-sub-header">
        <h4>Conference Papers</h4>
      </div>
      ${mainPapers.map((item) => renderPublicationItem(item, imageResolver)).join("")}
      <div class="publication-container-sub-header">
        <h4>Posters, Demos, Workshop Papers</h4>
      </div>
      ${subPapers.map((item) => renderPublicationItem(item, imageResolver)).join("")}
      ${fullPage ? `<article class="page-footer">Lasted updated on ${buildDate}</article>` : ""}
    </section>
  `;

  return fullPage ? layout({ route: "publications", content, analyticsId }) : content;
}

function renderPublicationItem(item: ContentItem<PublicationData>, imageResolver: ImageResolver): string {
  const data = item.data;
  const thumbnail = assetPath(data.thumbnail);
  const links = Object.entries(data.links || {})
    .map(
      ([label, href]) => `
        <a
          class="text-button publications-details-link-item"
          href="${escapeAttr(href)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${escapeHtml(label)}
        </a>
      `
    )
    .join("");

  const authors = (data.contributors || [])
    .map((author) => {
      const isMe = author === "Daeheon Jeong" || author === "Daeheon Jeong*";
      return `<p class="publications-details-author-item${isMe ? " author-me" : ""}">${escapeHtml(author)}</p>`;
    })
    .join("");

  return `
    <article class="publications-article">
      <div class="publications-thumbnail">
        <img
          src="${escapeAttr(thumbnail)}"
          ${imageResolver.dimensionsAttrs(thumbnail).trim()}
          alt="${escapeAttr(String(data.caption || "Thumbnail image of the paper"))}"
          class="publications-thumbnail-img"
        >
      </div>
      <div class="publications-detail">
        <h4 class="publications-detail-title">${escapeHtml(data.title)}</h4>
        <div class="publications-details-authors">${authors}</div>
        <div class="publications-details-other">
          <p class="publications-details-venue">${escapeHtml(data.venue)}</p>
        </div>
        <div class="publications-details-links">
          <p class="publications-details-date">${formatMonthYear(data.dateObject)}</p>
          <div class="publications-details-links-container">${links}</div>
        </div>
      </div>
    </article>
  `;
}
