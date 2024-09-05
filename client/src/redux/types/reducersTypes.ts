import { Slice, SliceCaseReducers, SliceSelectors } from "@reduxjs/toolkit";
import { CounterState } from "../slices/counterSlice";

export type CounterSlice = Slice<
  CounterState,
  SliceCaseReducers<CounterState>,
  string, string,
  SliceSelectors<CounterState>
>

