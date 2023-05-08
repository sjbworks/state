import { useReducer, Dispatch } from "react";
import { GlobalStateContext, Action, AnyAction } from "./GlobalStateContext";
import {
  snackbar,
  user,
  states,
  States,
  NameSpace,
  Snackbar,
  User,
} from "./states";
import { GlobalStateWithDispatch } from "./GlobalStateContext";

type Reducer<S, A> = (state: S, action: A) => S;

type ReducersMapObject<S, A extends Action = AnyAction> = {
  [K in keyof S]: Reducer<S[K], A>;
};

type ReducerFromReducersMapObject<M extends ReducersMapObject<any, any>> = (
  state: { [K in keyof M]: ReturnType<M[K]> },
  action: Parameters<M[keyof M]>[1]
) => { [K in keyof M]: ReturnType<M[K]> };

const reducers = {
  snackbar: snackbar.reducer,
  user: user.reducer,
};

function combineReducers<M extends ReducersMapObject<any, any>>(
  reducers: M
): ReducerFromReducersMapObject<M> {
  return (state, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      const reducer = reducers[key as keyof M];
      nextState[key as keyof M] = reducer(state[key as keyof M], action);
      console.log(nextState);
      return nextState;
    }, {} as { [K in keyof M]: ReturnType<M[K]> });
  };
}

// const createReducer = <T extends TReducer>(
//   modules: TModules<T>
// ): Dispatch<States[T]> => {
//   const updaters = Object.fromEntries(
//     Object.entries(modules)
//       .map(([key, { namespace, reducers }]) =>
//         mutations(namespace || key, reducers || {})
//       )
//       .flat()
//   );
//   return (state, { type, payload }) => {
//     const updater = updaters[type];
//     return updater ? updater(state, payload) : state;
//   };
// };

const isUser = (obj: any): obj is User => {
  return typeof obj.email === "string";
};
const isSnackbar = (obj: any): obj is Snackbar => {
  return typeof obj.message === "string";
};

const reducer = (state: Snackbar | User, action: any) => {
  if (isUser(state)) return { ...state };
  if (isSnackbar(state)) return { ...state };
};

type GlobalState = {
  [K in NameSpace]: States[K]["state"];
};

const initialState: GlobalState = {
  snackbar: states.snackbar.state,
  user: states.user.state,
};

type GlobalStateProviderProps = {
  children: React.ReactNode;
};

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}: GlobalStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
