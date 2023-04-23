import { snackbar } from "./snackbar";
import { user } from "./user";

export const states = [snackbar, user];
export const namespaces = states.map(({ namespace }) => namespace);
export const defaultValue = states.map(({ state }) => state);
export const reducers = states.map(({ reducer }) => reducer);
