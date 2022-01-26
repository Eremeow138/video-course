export interface ICourse {
  id: number;
  title: string;
  description: string;
  duration: number;
  creationDate: string;
  authors: string[];
  isTopRated: boolean;
}
