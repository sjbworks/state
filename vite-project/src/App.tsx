import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlobalStateProvider, useGlobalState } from "./state";

function App() {
  const [count, setCount] = useState(0);
  const [snackbar, dispatch] = useGlobalState("snackbar");
  dispatch({ isError: false, message: "yay" });
  console.log(snackbar);

  return (
    <GlobalStateProvider>
      <div>snackbar.message: {snackbar.message}</div>
      <div>snackbar.message: {snackbar.message}</div>
    </GlobalStateProvider>
  );
}

export default App;
