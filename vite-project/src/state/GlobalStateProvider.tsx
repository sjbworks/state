import { useReducer } from "react";
import {
  GlobalStateContext,
  UserAction,
  SnackbarAction,
} from "./GlobalStateContext";
import { States, states } from "./states";

const reducer = (state: States, action: UserAction | SnackbarAction) => {
  switch (action.type) {
    case "user":
      // return { ...state, user: { ...state, ...action.payload } };
      return { ...state, user: action.payload };
    case "snackbar":
      // return { ...state, snackbar: { ...state, ...action.payload } };
      return { ...state, snackbar: action.payload };
    default:
      return state;
  }
};

const initialState: States = {
  snackbar: states.snackbar,
  user: states.user,
};

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
