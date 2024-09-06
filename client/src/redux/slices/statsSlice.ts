import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { IStats } from "../types/stateTypes";
import { getStats } from "../thunkActions";

export type StatsState = {
  stats: IStats[];
  loading: boolean;
  error: object;
};

const initialState: StatsState = {
  stats: [
    {
      id: 0,
      score: 0,
      User: {
        name: "",
      },
    },
  ],
  loading: true,
  error: {},
};

const statsSlice = createSlice({
  name: "StatusReducer",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<StatsState>) => {
    builder.addCase(getStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStats.fulfilled, (state, action) => {
      state.stats = action.payload;
      state.loading = false;
    });
    builder.addCase(getStats.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default statsSlice.reducer;
