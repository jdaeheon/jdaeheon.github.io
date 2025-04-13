export interface PublicationItemData {
  data: {
    title: string;
    thumbnail: string;
    contributors: string[];
    venue: string;
    dateObject: Date;
    links: Record<string, string>;
    type: number;
  };
}
