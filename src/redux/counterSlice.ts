import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  disabled: boolean;
}

const initialState: CounterState = {
  value: 0,
  disabled: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (!state.disabled) state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    toggleDisable: (state) => {
      state.disabled = !state.disabled;
    },
  },
});

export const { increment, reset, toggleDisable } = counterSlice.actions;
export default counterSlice.reducer;
