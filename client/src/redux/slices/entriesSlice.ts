import { ActionReducerMapBuilder, createSlice, Draft, PayloadAction } from "@reduxjs/toolkit"
import { IEntrie } from "../../types/stateTypes"
import { getEntries } from "../thunkActions"
import { CounterState } from "./counterSlice"
import { IQuestion } from "../types/stateTypes"

export type EntriesState = {
  entries: IQuestion[],
  loading: boolean,
  error: object 

}

const initState: EntriesState = {
  entries: [],
  loading: true,
  error: {}
}

const entriesSlice = createSlice({
  name: 'EntriesReducer',
  initialState: initState,
  reducers: {
    disable(state: Draft<EntriesState>, action: PayloadAction<number[]>): void {
      state.entries[action.payload[0]].Questions[action.payload[1]].avaible = false
    },

  },
  extraReducers: (builder: ActionReducerMapBuilder<EntriesState>) => {
    builder.addCase(getEntries.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getEntries.fulfilled, (state, action) => {
      state.entries = action.payload
      state.loading = false
    })
    builder.addCase(getEntries.rejected, (state, action) => {
      state.error = (action.payload as Error)
      state.loading = false
    })
  },
})

export const { disable } = entriesSlice.actions
export default entriesSlice.reducer