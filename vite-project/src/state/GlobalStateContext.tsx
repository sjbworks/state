import { createContext, Dispatch } from "react";
import { States, User, Snackbar } from "./states";

export type UserAction = { type: "user"; payload: User };
export type SnackbarAction = { type: "snackbar"; payload: Snackbar };
export type Action =
  | { type: "user"; payload: User }
  | { type: "snackbar"; payload: Snackbar };

export type GlobalStateWithDispatch = { state: States } & {
  dispatch: Dispatch<Action>;
};

export const GlobalStateContext = createContext<
  GlobalStateWithDispatch | undefined
>(undefined);
