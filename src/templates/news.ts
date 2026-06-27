import { escapeHtml } from "../lib/html";
import type { ContentItem } from "../lib/types";
import { layout } from "./layout";

export function renderNews(
  news: ContentItem[],
  buildDate: string,
  analyticsId?: string
): string {
  const items = news
    .map(
      (item) => `
        <article class="news-article">
          <div class="news-header">
            <p class="news-title">${escapeHtml(String(item.data.title || ""))}</p>
            <p class="news-date">${escapeHtml(String(item.data.date || ""))}</p>
          </div>
          <div class="markdown">${item.html}</div>
        </article>
      `
    )
    .join("");

  return layout({
    route: "news",
    analyticsId,
    content: `
      <section class="section-container">
        <h3>News</h3>
        ${items}
        <article class="page-footer">Lasted updated on ${buildDate}</article>
      </section>
    `,
  });
}
