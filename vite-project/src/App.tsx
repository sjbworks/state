import React from "react";
import "./App.css";
import { GlobalStateProvider, useGlobalState } from "./state";

function App() {
  const [snackbar, dispatch] = useGlobalState("snackbar");
  dispatch({ isError: false, message: "yay" });
  console.log(dispatch);
  console.log(snackbar);

  return (
    <GlobalStateProvider>
      <div>snackbar.message: {snackbar.message}</div>
      <div>snackbar.message: {snackbar.message}</div>
    </GlobalStateProvider>
  );
}

export default App;
