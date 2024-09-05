export interface IUser {
  id: number,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string
}

export interface IEntrie {
  id: number,
  name: string,
  description: string,
  userId: number,
  createdAt: string,
  updatedAt: string
}

export interface IInputs {
  name: string, description: string
}

export interface IAuth {
  email: string, password: string, username?: string
}
