import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import entriesSlice from './slices/entriesSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counterSlice,
    entriesSlice,
    userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
