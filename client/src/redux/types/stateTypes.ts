export interface IUser {
  id: number;
  name: string;
  email: string;
}

export interface IAuth {
  name: string;
  email: string;
  password: string;
}

export interface IStats {
  id: number;
  score: number;
  User: {
    name: string;
  };
}
