import React, { createContext, useReducer } from "react";
import { defaultValue, reducers } from "./states";
import { NameSpaces } from "./types";

const reducer = (state, namespace: NameSpaces) => {
  return reducers[namespace];
};

// Contextの作成
export const GlobalStateContext = createContext();

// Providerの作成
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
