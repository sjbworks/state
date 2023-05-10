import { createSlice } from "@reduxjs/toolkit";

export const memberSlice = createSlice({
  name: "member",
  initialState: {
    id: 0,
    name: "",
    department: "",
  },
  reducers: {
    set: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { set } = memberSlice.actions;

export const memberReducer = memberSlice.reducer;
