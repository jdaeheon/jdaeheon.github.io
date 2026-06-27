import type { ImageResolver } from "../lib/images";
import type { ContentItem, PublicationData } from "../lib/types";
import { layout } from "./layout";
import { renderPublications } from "./publications";

export function renderAbout(
  coverLetter: ContentItem,
  publications: ContentItem<PublicationData>[],
  buildDate: string,
  imageResolver: ImageResolver,
  analyticsId?: string
): string {
  return layout({
    route: "about",
    analyticsId,
    content: `
      <section class="about-container">
        <section class="cover-letter">
          <article class="cover-letter-description">
            <h3>Introduction</h3>
            <div class="markdown">${coverLetter.html}</div>
            <nav class="cover-letter-link" aria-label="Profile links">
              <span class="cover-letter-link-label">Links:</span>
              <a class="text-button cover-letter-link-item" href="/cv.pdf">CV</a>
              <a class="text-button cover-letter-link-item" href="https://github.com/jdaeheon">Github</a>
              <a class="text-button cover-letter-link-item" href="https://scholar.google.com/citations?user=NsolHYsAAAAJ">Google Scholar</a>
              <a class="text-button cover-letter-link-item" href="mailto:neohgeek@gmail.com">Email</a>
            </nav>
          </article>
          <article class="cover-letter-aside">
            <img src="/profile.jpg"${imageResolver.dimensionsAttrs("/profile.jpg")} class="cover-letter-photo" alt="profile image of Daeheon Jeong">
          </article>
        </section>
        ${renderPublications(publications, buildDate, false, imageResolver)}
      </section>
    `,
  });
}
