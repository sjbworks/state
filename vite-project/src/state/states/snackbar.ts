export type Snackbar = {
  message: string;
  isError: boolean;
};

export const snackbar = {
  namespace: "snackbar" as const,
  state: {
    message: "",
    isError: false,
  } as Snackbar,
  reducer: (state: Snackbar, payload: Snackbar) => ({
    ...state,
    ...payload,
  }),
} as const;
