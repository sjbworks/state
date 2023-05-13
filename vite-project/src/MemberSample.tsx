import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./reduxStates/member";
import { MemberType, store } from "./reduxStates";

const capitalize = (value: string) => {
  return `${value.charAt(0).toUpperCase()}${value.slice(0).toLowerCase()}`;
};

function MemberSample() {
  const member = useSelector<MemberType>((state) => state.member);
  const state = store.getState();
  const dispatch = useDispatch();
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [dp, setDp] = useState<string>("");
  const setStateIdentify = (key: string) =>
    key === setId.toString()
      ? setId
      : key === setName.toString()
      ? setName
      : setDp;
  const stateIdentify = (key: string) =>
    key === id.toString() ? id : key === name.toString() ? name : dp;
  const events = Object.keys(state.member).reduce((obj, key) => {
    const setState = setStateIdentify(key);
    return {
      ...obj,
      [key]: (value: any) => {
        setState(value);
        dispatch(set({ [key]: value }));
      },
    };
  }, {} as { [key: string]: (value: any) => void });
  console.log(events);

  const type = (value: any) => (value === "id" ? "number" : "text");
  const convert = (state: any) =>
    state === "id"
      ? (value: any) => Number(value)
      : (value: any) => String(value);

  return (
    <div>
      {Object.keys(state.member).map((e) => {
        const converter = convert(e);
        const value = stateIdentify(e);
        console.log(type(e));
        return (
          <input
            type={type(e)}
            value={value}
            onChange={(value) => events[e](converter(value))}
            key={e}
          />
        );
      })}
      {/* <input
        type="number"
        value={id}
        onChange={(value) => handleChangeId(value)}
      />
      <input
        type="text"
        value={name}
        onChange={(value) => handleChangeName(value)}
      />
      <input
        type="text"
        value={dp}
        onChange={(value) => handleChangeDp(value)}
      /> */}
      <div>{JSON.stringify(member)}</div>
    </div>
  );
}

export default Member;
