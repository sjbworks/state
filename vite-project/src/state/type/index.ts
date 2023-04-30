import { states } from "../states";
import { Snackbar } from "../states/snackbar";
import { User } from "../states/user";

export type Modules = typeof states;
export type NameSpace = keyof Modules;
export type States<T extends NameSpace> = { [key in T]: Modules[T]["state"] };

export type Reducer<T> = (state: T, payload: Partial<T>) => T;
export type Reducers = {
  [k in NameSpace]: (
    state: States<k>[k],
    payload: Partial<States<k>[k]>
  ) => States<k>[k];
};
