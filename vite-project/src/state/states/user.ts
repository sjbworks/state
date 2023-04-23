type User = {
  id: string;
  name: string;
  email: string;
};

export const user = {
  namespace: "user",
  state: {
    id: "",
    name: "",
    email: "",
  },
  reducer: { user: (state: User) => ({ ...state }) },
} as const;
