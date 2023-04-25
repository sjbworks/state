import { namespaces } from "../states";
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
