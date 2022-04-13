import { IAuthor } from "./author.interface";

export interface ICourse {
  id?: number;
  name: string;
  description: string;
  duration: number;
  date: string;
  authors: IAuthor[];
  isTopRated: boolean;
}
