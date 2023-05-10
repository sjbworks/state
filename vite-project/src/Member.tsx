import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { set } from "./reduxStates/member";
import { MemberType } from "./reduxStates";

function Member() {
  const member = useSelector<MemberType>((state) => state.member);
  const dispatch = useDispatch();
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [dp, setDp] = useState<string>("");
  const handleChangeId = (value: React.ChangeEvent<HTMLInputElement>) => {
    const id = Number(value.target.value);
    setId(id);
    dispatch(set({ id }));
  };
  const handleChangeName = (value: React.ChangeEvent<HTMLInputElement>) => {
    const name = value.target.value;
    setName(name);
    dispatch(set({ name }));
  };
  const handleChangeDp = (value: React.ChangeEvent<HTMLInputElement>) => {
    const department = value.target.value;
    setDp(department);
    dispatch(set({ department }));
  };

  return (
    <div>
      <input
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
      />
      <div>{JSON.stringify(member)}</div>
    </div>
  );
}

export default Member;
