declare module "*.md";
declare module "*.mdx" {
  export const meta: {
    title?: string;
  };
}
