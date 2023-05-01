import { snackbar } from "./snackbar";
import { user } from "./user";
import { States, Reducers, NameSpace } from "../type";

export const states = { snackbar, user };

export const namespaces = Object.keys(states).map(
  (key) => states[key as NameSpace]["namespace"]
);
export const initialValues = {
  snackbar: snackbar.state,
  user: user.state,
};
export const reducers: Reducers = {
  snackbar: snackbar.reducer,
  user: user.reducer,
};
