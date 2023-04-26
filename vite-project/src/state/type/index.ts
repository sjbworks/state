import { namespaces, states } from "../states";
import { snackbar } from "../states/snackbar";
import { user } from "../states/user";

type GlobalStateArgs = {
  namespace: string | string[];
};

type GlobalStateReturnType = {
  state: string;
};

const module = { snackbar, user };

export type NameSpaces = (typeof namespaces)[number];
export type State = {
  [k in (typeof namespaces)[number]]: (typeof module)[k];
};

export type States = typeof states;
export type NameSpaceType = keyof States;
export type DefaultValueType<T extends NameSpaceType> = States[T]["state"];
// export type ReducerType<T extends NameSpaceType> = States[T]["reducer"];
// export type ReducersType<T extends NameSpaceType> = {
//   [Key in keyof States]: (
//     state: States[Key]["state"],
//     payload: any
//   ) => States[Key]["state"];
// };
export type ReducersType<T extends NameSpaceType> = (
  state: States[T]["state"],
  payload: T
) => States[T]["state"];
