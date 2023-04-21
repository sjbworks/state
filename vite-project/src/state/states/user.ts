type User = {
  id: string;
  name: string;
  email: string;
};

export const user = {
  namespace: "user",
  user: {
    id: "",
    name: "",
    email: "",
  },
  reducer: { set: (state: User) => ({ ...state }) },
} as const;
