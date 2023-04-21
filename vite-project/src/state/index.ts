import { createContext } from "react";
import { states } from "./states";

export const useGlobalStateContext = (state: any) => createContext(state);

type NameSpaces = (typeof states)[keyof typeof states]["namespace"];

type ReducerReturnType<NameSpaces> = void;
// function useGlobalStateReducer(namespace: string) {}
// function useGlobalStateReducer(namespace: string[]) {}
// export function useGlobalStateReducer(namespace: string | string[]) {
// }
