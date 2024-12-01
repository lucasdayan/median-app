export interface User {
  id: string;
  name: string;
  email: string;
}

export interface IArticle {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: Date;
}
