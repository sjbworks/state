import React, { ChangeEvent } from "react";
import "./App.css";
import { GlobalStateProvider } from "./state";
import User from "./User";
import Snackbar from "./Snackbar";
import UserAndSnackbar from "./UserAndSnackbar";
import { Provider } from "react-redux";
import { store } from "./reduxStates";
import Member from "./Member";
import CharacterInput from "./CharacterInput";
import CharacterValue from "./CharacterValue";
import { RecoilRoot } from "recoil";
import { Jotai } from "./Jotai";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <User />
        <Snackbar />
        <UserAndSnackbar />
      </GlobalStateProvider>
      <Provider store={store}>
        <Member />
      </Provider>
      <RecoilRoot>
        <CharacterInput />
        <CharacterValue />
      </RecoilRoot>
      <Jotai />
    </>
  );
}

export default App;
