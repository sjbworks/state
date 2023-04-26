import React, { createContext, useReducer, ReactNode } from "react";
import { defaultValue, reducers, states } from "./states";
import type { NameSpaces, State, ReducersType } from "./type";

const reducer = <T extends NameSpaces>(
  state: State[keyof State],
  namespace: keyof State
): ReducersType<T> => {
  return reducers(state);
};

type Props = {
  children?: ReactNode;
};

const GlobalStateContext = createContext<State[keyof State]>(
  {} as State[keyof State]
);

export const GlobalStateProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
