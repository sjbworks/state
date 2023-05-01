import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { initialValues, reducers } from "./states";
import type { States, NameSpace, Reducers } from "./type";

type Action<T extends NameSpace> = {
  namespace: NameSpace;
  payload: Partial<States[T]>;
  reducer: Reducers[T];
};

type ContextType = {
  state: States;
  dispatch: React.Dispatch<Action<NameSpace>>;
};

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

const reducer = <T extends NameSpace>(
  state: States[T],
  action: Action<T>
): States[T] => {
  const { namespace, payload, reducer } = action;
  return {
    ...state,
    [namespace]: reducer(state, payload),
  };
};

const AppContext = createContext<ContextType>({
  state: initialValues,
  dispatch: () => null,
});

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = <
  T extends NameSpace
>({
  children,
}: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook
export const useGlobalState = <T extends NameSpace>(
  namespace: T
): [States[T], (payload: Partial<States[T]>) => void] => {
  const { state, dispatch } = useContext(AppContext);

  const setState = (payload: Partial<States[T]>) => {
    dispatch({
      namespace,
      payload,
      reducer: reducers[namespace],
    });
  };

  return [state[namespace], setState];
};
