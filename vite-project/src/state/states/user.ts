export type User = {
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
  } as User,
  reducer: (state: User, payload: Partial<User>) => ({ ...state, ...payload }),
} as const;
