import fs from "node:fs/promises";
import path from "node:path";
import { build as bundle } from "esbuild";

export async function resetOutput(outDir: string) {
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });
}

export async function copyStaticAssets({
  rootDir,
  publicDir,
  outDir,
}: {
  rootDir: string;
  publicDir: string;
  outDir: string;
}) {
  await copyDir(publicDir, outDir);
  await copyFontAssets(rootDir, outDir);
}

export async function copyFile(from: string, to: string) {
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
}

export async function bundleBrowserScript(rootDir: string, outDir: string) {
  await bundle({
    entryPoints: [path.join(rootDir, "src/scripts/main.ts")],
    outfile: path.join(outDir, "main.js"),
    bundle: true,
    format: "iife",
    minify: true,
    sourcemap: false,
    target: "es2018",
  });
}

export async function writePage(outDir: string, route: string, html: string) {
  const filePath = route ? path.join(outDir, route, "index.html") : path.join(outDir, "index.html");
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, html);
}

async function copyFontAssets(rootDir: string, outDir: string) {
  const fonts = [
    {
      source: "node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-normal.woff2",
      target: "open-sans-latin-normal.woff2",
    },
    {
      source: "node_modules/@fontsource-variable/open-sans/files/open-sans-latin-wght-italic.woff2",
      target: "open-sans-latin-italic.woff2",
    },
    {
      source: "node_modules/@fontsource-variable/lora/files/lora-latin-wght-normal.woff2",
      target: "lora-latin-normal.woff2",
    },
    {
      source: "node_modules/@fontsource-variable/lora/files/lora-latin-wght-italic.woff2",
      target: "lora-latin-italic.woff2",
    },
    {
      source: "node_modules/@fontsource-variable/libre-franklin/files/libre-franklin-latin-wght-normal.woff2",
      target: "libre-franklin-latin-normal.woff2",
    },
    {
      source: "node_modules/@fontsource-variable/libre-franklin/files/libre-franklin-latin-wght-italic.woff2",
      target: "libre-franklin-latin-italic.woff2",
    },
  ];

  await Promise.all(
    fonts.map((font) =>
      copyFile(path.join(rootDir, font.source), path.join(outDir, "fonts", font.target))
    )
  );
}

async function copyDir(from: string, to: string) {
  await fs.mkdir(to, { recursive: true });
  const entries = await fs.readdir(from, { withFileTypes: true });

  await Promise.all(
    entries
      .filter((entry) => entry.name !== ".DS_Store")
      .map((entry) => {
        const source = path.join(from, entry.name);
        const target = path.join(to, entry.name);
        return entry.isDirectory() ? copyDir(source, target) : copyFile(source, target);
      })
  );
}
