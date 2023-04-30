import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { initialValues, reducers } from "./states";
import type { State, States, NameSpace, Reducers } from "./type";

type Action = {
  namespace: NameSpace;
  payload: Partial<States<NameSpace>[NameSpace]>;
  reducer: Reducers[NameSpace];
};

type ContextType = {
  state: State<NameSpace>;
  dispatch: React.Dispatch<Action>;
};

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

const reducer = (state: State<NameSpace>, action: Action): State<NameSpace> => {
  const { namespace, payload, reducer } = action;
  return {
    ...state,
    [namespace]: reducer(state[namespace], payload),
  };
};

const AppContext = createContext<ContextType>({
  state: initialValues,
  dispatch: () => null,
});

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
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
const useGlobalState = <T extends NameSpace>(
  namespace: T
): [States<T>[T], (payload: Partial<States<T>[T]>) => void] => {
  const { state, dispatch } = useContext(AppContext);

  const setState = (payload: Partial<States<T>[T]>) => {
    dispatch({
      namespace,
      payload,
      reducer: reducers[namespace],
    });
  };

  return [state[namespace], setState];
};
