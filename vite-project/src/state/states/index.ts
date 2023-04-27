import { snackbar } from "./snackbar";
import { user } from "./user";
import { States } from "../type";

export const states = { snackbar, user };

export const namespaces = Object.keys(states).map(
  (key) => states[key as keyof States]["namespace"]
);
export const initialValues = {
  snackbar: snackbar.state,
  user: user.state,
};
export const reducers = {
  snackbar: snackbar.reducer,
  user: user.reducer,
};
