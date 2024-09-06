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
  updatedAt: string,
  avaible: boolean
}

export interface ITopic {
  id: number,
  title: string,
  updatedAt: string,
  Questions: IQuestion[],
  topicIndex: number
}

export interface IQuestion {
  id: number,
  TopicId: number,
  content: string,
  score: number,
  createdAt: string,
  updatedAt: string,
  Answers?: Array<IAnswer>
  avaible?: boolean
}

export interface IAnswer {
  id: number,
  QuestionId: number,
  content: string,
  trueness: boolean,
  createdAt: string,
  updatedAt: string
}

export interface IInputs {
  name: string, description: string
}

export interface IAuth {
  email: string, password: string, username?: string
}
