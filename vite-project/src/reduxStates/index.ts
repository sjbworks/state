import { configureStore } from "@reduxjs/toolkit";
import { memberReducer } from "./member";

export const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export type MemberType = ReturnType<typeof store.getState>;
