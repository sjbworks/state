import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { initialValues, reducers } from "./states";
import type { Modules, State, States, NameSpace, Reducers } from "./type";

type Props = {
  children?: ReactNode;
};

const GlobalStateContext = createContext<Modules[keyof Modules]>(
  {} as Modules[keyof Modules]
);

type Action = {
  namespace: NameSpace;
  payload: Partial<States<NameSpace>>;
  reducer: Reducers[NameSpace];
};

type ContextType = {
  state: State<NameSpace>;
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext<ContextType>({
  state: initialValues,
  dispatch: () => null,
});

const useGlobalState = <T extends NameSpace>(key: T) => {
  const { state, dispatch } = useContext(AppContext);
  const setState = (payload: Partial<States[T]>) => {};

  return reducers[key];
};

export const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
