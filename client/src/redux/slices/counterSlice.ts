import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"
import { CounterSlice } from "../types/reducersTypes"

export type CounterState = { count: number }

const initialState: CounterState =  { count: 0 } // ! Должен называться именно так

const counterSlice: CounterSlice = createSlice({
  name: 'CounterReducer',
  initialState,
  reducers: {
    increment(state: Draft<CounterState>, action: PayloadAction<number>): void {
      state.count = false
    },
    decrement(state: Draft<CounterState>, action: PayloadAction<number>): void {
      state.count -= action.payload
    },
    multiply(state: Draft<CounterState>, action: PayloadAction<number>): void {
      state.count *= action.payload
    },
    divide(state: Draft<CounterState>, action: PayloadAction<number>): void {
      state.count /= action.payload
    }
  }
})
console.log('counterSlice', counterSlice)

export default counterSlice.reducer

export const { increment, decrement, multiply, divide } = counterSlice.actions
