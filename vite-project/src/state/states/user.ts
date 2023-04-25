type User = {
  id: string;
  name: string;
  email: string;
};

export const user = {
  namespace: "user" as const,
  state: {
    id: "",
    name: "",
    email: "",
  },
  reducer: { user: (state: User, payload: User) => ({ ...state, ...payload }) },
} as const;
