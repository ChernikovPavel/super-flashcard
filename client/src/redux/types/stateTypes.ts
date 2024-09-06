export interface IUser {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IStats {
  id: number,
  UserId: number,
  score: number,
  createdAt: string,
  updatedAt: string,
  User: IUser
}