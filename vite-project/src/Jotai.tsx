import React, { ChangeEvent } from "react";
import "./App.css";
import { textAtom, uppercaseAtom } from "./jotaiState";
import { useAtom } from "jotai";

function Input() {
  const [text, setText] = useAtom(textAtom);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setText(e.target.value);
  };
  return <input onChange={handleChange} value={text} />;
}

function Character() {
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>Uppercase: {uppercase}</div>;
}

export const Jotai = () => (
  <>
    <Input />
    <Character />
  </>
);
