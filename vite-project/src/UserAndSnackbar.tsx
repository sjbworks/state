import React from "react";
import "./App.css";
import { useGlobalState } from "./state";

function UserAndSnackbar() {
  const { user, setUser, snackbar, setSnackbar } = useGlobalState(
    "user",
    "snackbar"
  );
  setUser({ id: "123456", name: "pochakko" });
  setSnackbar({ message: "yayyyyy", isError: false });

  return (
    <div>
      <div>user: {JSON.stringify(user)}</div>
      <div>snackbar: {JSON.stringify(snackbar)}</div>
    </div>
  );
}

export default UserAndSnackbar;
