import { useContext, Dispatch } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import { States, NameSpace } from "../states";

export const useGlobalState = <T extends NameSpace>(
  key: T
): [States[T]["state"], Dispatch<States[T]["state"]>] => {
  const context = useContext(GlobalStateContext);
  return [context[key], context.dispatch];
};
