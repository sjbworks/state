import { snackbar } from "./snackbar";
import { user } from "./user";
import { States, ReducersType } from "../type";

export const states = { snackbar, user };

export const namespaces = Object.keys(states).map(
  (key) => states[key as keyof States]["namespace"]
);
export const defaultValue = Object.keys(states).map(
  (key) => states[key as keyof States]["state"]
);
export const reducers = Object.keys(states).map(
  (key) => states[key as keyof States]["reducer"]
);
