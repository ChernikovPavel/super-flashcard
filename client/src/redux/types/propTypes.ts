import { Dispatch, SetStateAction } from "react";
import { IUser } from "./stateTypes";

export type UserSetuser = {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
};

export type AuthProps = Pick<UserSetuser, "user">;
