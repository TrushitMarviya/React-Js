// eslint-disable-next-line no-unused-vars
import React from 'react'

export default function Local1() {
  localStorage.setItem("Adam","Baseball");
  localStorage.setItem("Broad","Cricket");
  localStorage.setItem("Carry","Football");
  localStorage.setItem("Donald","Swimming");

  let name1 = localStorage.getItem("Adam");
  let name2 = localStorage.getItem("Broad");
  console.log(name1);
  console.log(name2);

  localStorage.removeItem("Carry");
  localStorage.removeItem("Donald");


  let Student = {
    Id :"1000" , name :"Aa"
  }
  localStorage.setItem("Stu1",JSON.stringify(Student));

let Stu1 = JSON.parse(localStorage.getItem("Stu1"));
console.log(Stu1);

  return (
    <>
    <h1>Local-1.2 </h1>
    </>
  )
}
