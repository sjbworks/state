import React from "react";
import "./App.css";
import { GlobalStateProvider } from "./state";
import User from "./User";
import Snackbar from "./Snackbar";
import UserAndSnackbar from "./UserAndSnackbar";
import { Provider } from "react-redux";
import store from "./reduxStates";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <User />
        <Snackbar />
        <UserAndSnackbar />
      </GlobalStateProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default App;
