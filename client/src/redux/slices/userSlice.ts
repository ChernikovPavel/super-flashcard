import { initUserState } from '../initStates/initStates'
import { IUser } from '../types/stateTypes'
import { createSlice } from '@reduxjs/toolkit';
import { authUser, getUser } from "../thunkActions"

export type UserState = {
  user: IUser,
  loading: boolean,
  error: object 
}

const initialState = {
  user: initUserState,
  loading: true,
  error: {}
}

const userSlice = createSlice({
  name: 'UserReducer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })

    // * авторизация / регистрация
    builder.addCase(authUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(authUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
    })
    builder.addCase(authUser.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  }
})

export default userSlice.reducer
