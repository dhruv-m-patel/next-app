export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type ListOfArticles = Array<Article>;

export interface MessageResponse {
  message: string;
}
