import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit"
import { IStats } from "../types/stateTypes";
import { getStats } from "../thunkActions"

export type StatsState = {
  stats: IStats[],
  loading: boolean,
  error: object 
}

const initState: StatsState = {
  stats: [],
  loading: true,
  error: {}
}

const statsSlice = createSlice({
  name: 'StatusReducer',
  initialState: initState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<StatsState>) => {
    // * Получение
    builder.addCase(getStats.pending, (state) => {
      console.log("builder:", builder)
      state.loading = true
    })
  },
})

export default statsSlice.reducer
