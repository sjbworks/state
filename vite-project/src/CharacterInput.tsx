import React, { ChangeEvent } from "react";
import "./App.css";
import { textState } from "./recoilState";
import { useRecoilState } from "recoil";

function CharacterInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      Echo: {text}
    </div>
  );
}

export default CharacterInput;
