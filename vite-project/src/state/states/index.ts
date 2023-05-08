export type Snackbar = {
  message?: string;
  isError?: boolean;
};

export type User = {
  id?: string;
  name?: string;
  email?: string;
};

export const snackbar = {
  namespace: "snackbar" as const,
  state: {
    message: "",
    isError: false,
  },
  reducer: (state: Snackbar, payload: Snackbar) => ({
    ...state,
    ...payload,
  }),
};

export const user = {
  namespace: "user" as const,
  state: {
    id: "",
    name: "",
    email: "",
  },
  reducer: (state: User, payload: User) => ({ ...state, ...payload }),
};

export type States = {
  snackbar: Snackbar;
  user: User;
};

export const states: States = {
  snackbar: snackbar.state,
  user: user.state,
};

export type NameSpace = typeof user.namespace | typeof snackbar.namespace;
