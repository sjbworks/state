export type Snackbar = {
  message: string;
  isError: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
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
  snackbar: typeof snackbar;
  user: typeof user;
};

export const states: States = { snackbar, user };
export type NameSpace = "snackbar" | "user";
