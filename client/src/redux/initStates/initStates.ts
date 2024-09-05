import { IAuth, IInputs, IUser } from "../types/stateTypes";

export const initUserState: IUser = {
  id: 0, username: '', email: '', createdAt: '', updatedAt: ''
}

export const initInputsState: IInputs = { name: '', description: '' }

export const initAuthState: IAuth  = { email: '', password: '' }

