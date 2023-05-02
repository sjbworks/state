import { createContext, Dispatch } from "react";
import { States, User, Snackbar, NameSpace } from "./states";

export type Action<T extends string = string, P = any> = {
  type: T;
  payload: P;
};

export type AnyAction = Action<string, any>;

type GlobalState = {
  [K in NameSpace]: States[K]["state"];
};

const initialState: GlobalStateWithDispatch = {
  snackbar: { message: "", isError: false },
  user: { id: "", name: "", email: "" },
  dispatch: () => {},
};

export type GlobalStateWithDispatch = GlobalState & {
  dispatch: Dispatch<Snackbar | User>;
};
export const GlobalStateContext = createContext(
  initialState as GlobalStateWithDispatch
);
