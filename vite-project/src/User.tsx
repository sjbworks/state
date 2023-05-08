import React from "react";
import "./App.css";
import { useGlobalState } from "./state";

function User() {
  const { user, setUser } = useGlobalState("user");
  setUser({ email: "ippppp@email" });

  return <div>user: {JSON.stringify(user)}</div>;
}

export default User;
