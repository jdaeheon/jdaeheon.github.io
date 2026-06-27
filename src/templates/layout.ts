export type RouteName = "about" | "news" | "projects" | "publications";

export function layout({
  route,
  content,
  script = false,
  analyticsId,
}: {
  route: RouteName;
  content: string;
  script?: boolean;
  analyticsId?: string;
}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Graduate student interested in HAI, Knowledge Work, and AI Alignment">
    <meta name="robots" content="noindex, nofollow, nocache">
    <meta name="googlebot" content="noindex, nofollow, noimageindex, max-video-preview:-1, max-image-preview:none, max-snippet:-1">
    <title>Daeheon Jeong</title>
    <link rel="icon" href="/favicon.ico" sizes="16x16">
    <link rel="icon" href="/icon.png" type="image/png" sizes="400x400">
    <link rel="preload" href="/fonts/open-sans-latin-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/lora-latin-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/fonts/libre-franklin-latin-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/styles.css">
    ${prefetchNavigation(route)}
    ${analyticsId ? googleAnalytics(analyticsId) : ""}
  </head>
  <body>
    <main class="main">
      <div class="page-shell">
        <img src="/thumbnail.png" class="header-hidden-thumbnail" alt="hidden thumbnail">
        <nav class="header" aria-label="Primary navigation">
          <div class="header-container">
            <h1 class="header-title">Daeheon<br>Jeong</h1>
            <a class="header-button${route === "about" ? " header-button-active" : ""}" href="/">About</a>
            <a class="header-button${route === "news" ? " header-button-active" : ""}" href="/news/">News</a>
            <a class="header-button${route === "projects" ? " header-button-active" : ""}" href="/projects/">Projects</a>
            <a class="header-button${route === "publications" ? " header-button-active" : ""}" href="/publications/">Publications</a>
          </div>
        </nav>
        <div class="body">${content}</div>
        <footer class="footer"></footer>
      </div>
    </main>
    ${script ? `<script src="/main.js" defer></script>` : ""}
  </body>
</html>`;
}

const navigationRoutes: Array<{ href: string; route: RouteName }> = [
  { href: "/", route: "about" },
  { href: "/news/", route: "news" },
  { href: "/projects/", route: "projects" },
  { href: "/publications/", route: "publications" },
];

function prefetchNavigation(currentRoute: RouteName): string {
  return navigationRoutes
    .filter(({ route }) => route !== currentRoute)
    .map(({ href }) => `<link rel="prefetch" href="${href}" as="document">`)
    .join("\n    ");
}

function googleAnalytics(id: string): string {
  return `
    <script async src="https://www.googletagmanager.com/gtag/js?id=${id}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}');
    </script>
  `;
}
