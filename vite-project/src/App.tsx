import React from "react";
import "./App.css";
import { GlobalStateProvider } from "./state";
import User from "./User";
import Snackbar from "./Snackbar";
import UserAndSnackbar from "./UserAndSnackbar";

function App() {
  return (
    <GlobalStateProvider>
      <User />
      <Snackbar />
      <UserAndSnackbar />
    </GlobalStateProvider>
  );
}

export default App;
