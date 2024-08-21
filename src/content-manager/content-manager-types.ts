export interface ContentManagerEntry {
  id: string;
  title: string;
  slug: string;
}

export interface ContentManagerItem {
  id: string;
  title: string;
  entries: ContentManagerEntry[];
}

export interface ContentManagerType {
  id: string;
  title: string;
  items: ContentManagerItem[];
}
