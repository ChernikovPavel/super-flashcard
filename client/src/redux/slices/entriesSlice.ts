import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit"
import { IEntrie } from "../../types/stateTypes"
import { addEntrie, delEntrie, getEntries } from "../thunkActions"

export type EntriesState = {
  entries: IEntrie[],
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
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<EntriesState>) => {
    // * Получение
    builder.addCase(getEntries.pending, (state) => {
      console.log("builder:", builder)
      state.loading = true
    })
    // * action.payload берётся из axios, из ф-ии getEntries
    builder.addCase(getEntries.fulfilled, (state, action) => {
      state.entries = action.payload
      state.loading = false
    })
    builder.addCase(getEntries.rejected, (state, action) => {
      state.error = action.payload
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
      state.error = action.payload
      state.loading = false
    })

    // * Удаление
    builder.addCase(delEntrie.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(delEntrie.fulfilled, (state, action) => {
      state.entries = state.entries.filter((el) => el.id !== action.payload)
      state.loading = false
    }) 
    builder.addCase(delEntrie.rejected, (state, action) => {
      state.error = action.payload
      state.loading = false
    })
  },
})

export default entriesSlice.reducer
