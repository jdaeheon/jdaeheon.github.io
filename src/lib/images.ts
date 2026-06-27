import path from "node:path";
import fs from "node:fs";
import { imageSize } from "image-size";

export type ImageInfo = {
  height: number;
  width: number;
};

export type ImageResolver = {
  dimensionsFor(src: string): ImageInfo | undefined;
  dimensionsAttrs(src: string): string;
  addDimensionsToHtml(html: string): string;
};

export function createImageResolver(publicDir: string): ImageResolver {
  const cache = new Map<string, ImageInfo | undefined>();

  function dimensionsFor(src: string): ImageInfo | undefined {
    const normalizedSrc = normalizeLocalSrc(src);
    if (!normalizedSrc) return undefined;

    if (cache.has(normalizedSrc)) {
      return cache.get(normalizedSrc);
    }

    const filePath = path.join(publicDir, normalizedSrc);
    try {
      const dimensions = imageSize(fs.readFileSync(filePath));
      const result =
        dimensions.width && dimensions.height
          ? { width: dimensions.width, height: dimensions.height }
          : undefined;
      cache.set(normalizedSrc, result);
      return result;
    } catch {
      cache.set(normalizedSrc, undefined);
      return undefined;
    }
  }

  function dimensionsAttrs(src: string): string {
    const dimensions = dimensionsFor(src);
    if (!dimensions) return "";

    return ` width="${dimensions.width}" height="${dimensions.height}"`;
  }

  function addDimensionsToHtml(html: string): string {
    return html.replace(/<img\b([^>]*?)>/g, (match, attributes: string) => {
      if (/\swidth=/.test(attributes) || /\sheight=/.test(attributes)) {
        return match;
      }

      const src = extractSrc(attributes);
      if (!src) return match;

      const dimensionAttributes = dimensionsAttrs(src);
      if (!dimensionAttributes) return match;

      return `<img${attributes}${dimensionAttributes}>`;
    });
  }

  return { dimensionsFor, dimensionsAttrs, addDimensionsToHtml };
}

function extractSrc(attributes: string) {
  const match = attributes.match(/\ssrc=(["'])(.*?)\1/);
  return match?.[2];
}

function normalizeLocalSrc(src: string) {
  if (/^(https?:|data:|mailto:|#)/.test(src)) return undefined;

  const withoutQuery = src.split("?")[0].split("#")[0];
  const normalized = withoutQuery.startsWith("/") ? withoutQuery.slice(1) : withoutQuery;

  if (!normalized || normalized.startsWith("../")) return undefined;

  return normalized;
}
