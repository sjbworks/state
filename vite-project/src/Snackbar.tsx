import React from "react";
import "./App.css";
import { useGlobalState } from "./state";

function Snackbar() {
  const { snackbar, setSnackbar } = useGlobalState("snackbar");
  setSnackbar({ message: "yayyyyy", isError: false });

  return <div>snackbar: {JSON.stringify(snackbar)}</div>;
}

export default Snackbar;
