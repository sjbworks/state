import React from "react";
import "./App.css";
import { textState } from "./recoilState";
import { useRecoilState } from "recoil";

function CharacterValue() {
  const [text, setText] = useRecoilState(textState);

  return <div>Value: {text}</div>;
}

export default CharacterValue;
