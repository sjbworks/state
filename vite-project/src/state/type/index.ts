import { states } from "../states";

export type Modules = typeof states;
// type States = typeof states.snackbar.state & typeof states.user.state;
export type NameSpace = keyof Modules;
export type States<T extends NameSpace> = Modules[T]["state"];
export type State<T extends NameSpace> = { [key in T]: Modules[T]["state"] };

export type Reducer<T> = (state: T, payload: Partial<T>) => T;
export type Reducers = {
  [key: string]: Reducer<any>;
};
// export type ReducersType<T extends NameSpace> = {
//   [k in NameSpace]: Reducer<T>;
// };
