export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IEntrie {
  id: number;
  name: string;
  description: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface IAuth {
  name: string;
  email: string;
  password: string;
}
