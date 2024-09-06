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
      // console.log(state.entries)
      // console.log('index', action.payload[0])
      state.entries[action.payload[0]].Questions[action.payload[1]].avaible = false
    },

  },
  extraReducers: (builder: ActionReducerMapBuilder<EntriesState>) => {
    // * Получение
    builder.addCase(getEntries.pending, (state) => {
      state.loading = true
    })
    // * action.payload берётся из axios, из ф-ии getEntries
    builder.addCase(getEntries.fulfilled, (state, action) => {
      state.entries = action.payload
      state.loading = false
    })
    builder.addCase(getEntries.rejected, (state, action) => {
      state.error = (action.payload as Error)
      state.loading = false
    })

    // * Добавление
    builder.addCase(addEntrie.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(addEntrie.fulfilled, (state, action) => {
      state.entries.push(action.payload)
      state.loading = false
    })
    builder.addCase(addEntrie.rejected, (state, action) => {
      state.error = (action.payload as Error)
      state.loading = false
    })

  },
})

export const { disable } = entriesSlice.actions
export default entriesSlice.reducer