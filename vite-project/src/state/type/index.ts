import { states } from "../states";

export type Modules = typeof states;
export type NameSpace = keyof Modules;
export type States<T extends NameSpace> = Modules[T]["state"];
export type State<T extends NameSpace> = { [key in T]: Modules[T]["state"] };

export type Reducer<T> = (state: T, payload: Partial<T>) => T;
export type Reducers = {
  [key: string]: Reducer<any>;
};
