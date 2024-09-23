// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Local() {
// Set Items
    localStorage.setItem("Alex","React");
    localStorage.setItem("Brace","Node");
    localStorage.setItem("Charles","Computer");
    localStorage.setItem("David","Sport");
// Get Items  
    let data1=localStorage.getItem("Alex");
    console.log(data1);
    let data2=localStorage.getItem("Brace");
    console.log(data2);
// Remove Item 
    localStorage.removeItem("Charles");
    localStorage.removeItem("David");


    // Object 
    let Data1 = {name:"Alex",Age:"19"}
    localStorage.setItem("name1",JSON.stringify(Data1))
    let objData = JSON.parse(localStorage.getItem("name1"));
    console.log(objData);
    
  return (
    <>
    <h1>Local-1.1</h1>
    </>
  )
}
