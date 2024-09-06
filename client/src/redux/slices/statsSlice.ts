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
    builder.addCase(getStats.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getStats.fulfilled, (state, action) => {
      state.stats = action.payload
      state.loading = false
    })
    builder.addCase(getStats.rejected, (state, action) => {
      state.error = (action.payload as Error);
      state.loading = false;
    })
  },
})

export default statsSlice.reducer
