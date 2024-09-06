import { IQuestion, ITopic } from '../redux/types/stateTypes';
export interface sendPointsBody {
    score: number;
    UserId: number
}

export interface initAsker {
    question :IQuestion
}