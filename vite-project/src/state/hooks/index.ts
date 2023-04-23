import { createContext, useReducer, Reducer } from "react";
import { states } from "../states";

export const useGlobalStateContext = (state: any) => createContext(state);

const module = states.snackbar.snackbar;

type NameSpaces = (typeof states)[keyof typeof states]["namespace"];

type ReducerReturnType<NameSpaces> = void;
// function useGlobalStateReducer(namespace: string) {}
// function useGlobalStateReducer(namespace: string[]) {}
// export function useGlobalStateReducer(namespace: string | string[]) {
// }

export const useGlobalState = (namespace: NameSpaces) => {
  const useGlobalStateContext = createContext();
  const [state, dispatch] = useReducer(
    states[namespace]["reducer"],
    states[namespace][namespace]
  );
};
