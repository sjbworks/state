type Snackbar = {
  message: string;
  isError: boolean;
};

export const snackbar = {
  namespace: "snackbar" as const,
  state: {
    message: "",
    isError: false,
  },
  reducer: {
    snackbar: (state: Snackbar, payload: Snackbar) => ({
      ...state,
      ...payload,
    }),
  },
} as const;
