type Snackbar = {
  message: string;
  isError: boolean;
};

export const snackbar = {
  namespace: "snackbar",
  state: {
    message: "",
    isError: false,
  },
  reducer: { set: (state: Snackbar) => ({ ...state }) },
} as const;
