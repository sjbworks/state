import { namespaces } from "../states";

type GlobalStateArgs = {
  namespace: string | string[];
};

type GlobalStateReturnType = {
  state: string;
};

export type NameSpaces = (typeof namespaces)[number];
