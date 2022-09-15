export type ChapterData = {
  chapterId: string;
  contentId: string;
  pages?: ChapterPage[];
  text?: string;
};

export type ChapterPage = {
  url?: string;
  raw?: string;
};
