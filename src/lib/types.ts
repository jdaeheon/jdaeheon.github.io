export type Frontmatter = Record<string, unknown>;

export type ContentItem<T extends Frontmatter = Frontmatter> = {
  data: T & {
    date?: string;
    dateObject: Date;
    link?: string;
  };
  content: string;
  html: string;
  file: string;
};

export type ProjectData = {
  title: string;
  description: string;
  thumbnail: string;
  caption: string;
  link: string;
  type: string;
};

export type PublicationData = {
  title: string;
  thumbnail: string;
  caption?: string;
  contributors: string[];
  venue: string;
  links: Record<string, string>;
  type: number;
};
