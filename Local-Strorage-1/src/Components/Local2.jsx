// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Local2() {
localStorage.setItem("101","Student1");
localStorage.setItem("102","Student2");
localStorage.setItem("103","Student3");
localStorage.setItem("104","Student4");

let d1 = localStorage.getItem("101");
let d2 = localStorage.getItem("102");

console.log(d1);
console.log(d2);

localStorage.removeItem(103);
localStorage.removeItem(104);

let Id ={
    "101": "Student1",
}
localStorage.setItem("Data1",JSON.stringify(Id));
let name = JSON.parse(localStorage.getItem("Data1"))
console.log(name);


  return (
    <>
    <h1>local-1.2</h1>
    </>
  )
}
