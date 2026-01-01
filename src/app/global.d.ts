declare module "*.md";
declare module "*.mdx" {
  export const meta: {
    title?: string;
  };
}
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
