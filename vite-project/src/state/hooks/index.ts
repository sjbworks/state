import { useContext } from "react";
import { GlobalStateContext, Action } from "../GlobalStateContext";
import { States, NameSpace } from "../states";

const capitalize = (str: string) => {
  if (typeof str !== "string" || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const useGlobalState = <T extends NameSpace>(...keys: T[]) => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  const state = keys.reduce((acc, key) => {
    return { ...acc, [key]: context.state[key] };
  }, {} as Pick<States, T>);

  const setState = (key: T, value: States[T]) => {
    context.dispatch({ type: key, payload: value } as Action);
  };

  const setStateObjects = keys.reduce((acc, key) => {
    return {
      ...acc,
      [`set${capitalize(key)}`]: (value: States[T]) => setState(key, value),
    };
  }, {} as { [Key in T as `set${Capitalize<string & Key>}`]: (value: States[T]) => void });
  return { ...state, ...setStateObjects };
};
