import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const rootDir = process.cwd();
const tsxBin = path.join(rootDir, "node_modules/.bin/tsx");
const outDir = path.join(rootDir, "out");
const port = Number(process.env.PORT || 3000);
const watchedDirs = ["content", "src/lib", "src/templates", "src/scripts", "src/styles"];
let rebuildTimer: NodeJS.Timeout | undefined;
let isBuilding = false;
let shouldRebuild = false;

async function main() {
  await rebuild();
  startServer();
  watchSource();
}

function startServer() {
  const server = http.createServer(async (request, response) => {
    const url = new URL(request.url || "/", `http://localhost:${port}`);
    const filePath = resolveFilePath(url.pathname);

    try {
      const body = await fs.promises.readFile(filePath);
      response.writeHead(200, { "Content-Type": contentType(filePath) });
      response.end(body);
    } catch {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
    }
  });

  server.listen(port, () => {
    console.log(`Serving http://localhost:${port}`);
  });
}

function watchSource() {
  for (const dir of watchedDirs) {
    const absoluteDir = path.join(rootDir, dir);
    if (!fs.existsSync(absoluteDir)) continue;

    fs.watch(absoluteDir, { recursive: true }, (_eventType, filename) => {
      if (!filename || filename.endsWith(".DS_Store")) return;
      scheduleRebuild();
    });
  }
}

function scheduleRebuild() {
  clearTimeout(rebuildTimer);
  rebuildTimer = setTimeout(() => {
    void rebuild();
  }, 100);
}

async function rebuild(): Promise<void> {
  if (isBuilding) {
    shouldRebuild = true;
    return;
  }

  isBuilding = true;
  console.log("Building...");

  const exitCode = await run(tsxBin, ["src/build.ts"]);
  if (exitCode === 0) {
    console.log("Build complete.");
  } else {
    console.error(`Build failed with exit code ${exitCode}.`);
  }

  isBuilding = false;

  if (shouldRebuild) {
    shouldRebuild = false;
    await rebuild();
  }
}

function run(command: string, args: string[]) {
  return new Promise<number | null>((resolve) => {
    const child = spawn(command, args, {
      cwd: rootDir,
      stdio: "inherit",
    });

    child.on("close", resolve);
  });
}

function resolveFilePath(pathname: string) {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = path.normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = path.join(outDir, normalizedPath);

  if (path.extname(requestedPath)) {
    return requestedPath;
  }

  return path.join(requestedPath, "index.html");
}

function contentType(filePath: string) {
  const extension = path.extname(filePath);
  const types: Record<string, string> = {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".pdf": "application/pdf",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  };

  return types[extension] || "application/octet-stream";
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
