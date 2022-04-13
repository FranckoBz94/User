// src/slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
}

export const name = "counter"

const slice = createSlice({
  name,
  initialState,
  // The `reducers` field allows us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers since
      // it doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    // The `PayloadAction` type allows us to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { actions, reducer } = slice
