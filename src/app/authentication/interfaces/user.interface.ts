import { IName } from "./name.interface";

export interface IUser {
  id: number;
  token: string;
  name: IName;
  login: string;
  password: string;
}
