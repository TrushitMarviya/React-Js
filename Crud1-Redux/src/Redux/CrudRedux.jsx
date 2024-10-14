// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData, DeleteData } from "../Configure/CrudSlice";

export default function CrudRedux() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const count1 = useSelector((state) => {
    return state.crudKey;
  });
  const dispatch = useDispatch();
  const HandleAdd = () => {
    dispatch(AddData({ id: Date.now(), name: name, age: age }));
    setName(" ");
    setAge(" ");
  };
  const HandleDelete = (id) => {
    dispatch(DeleteData(id));
  };
  return (

    <>
      <br />
      <br />
      <br />
      <input
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={age}
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={HandleAdd}>Submit</button> <br />
      <br />
      <br />
      {count1
        ? count1.Student.map((e, i) => {
            return (
              <ul key={i}>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.age}</li>
                <li>
                  <button onClick={() => HandleDelete(e.id)}>Delete</button>
                </li>
              </ul>
            );
          })
        : " "}
    </>
  );
}
