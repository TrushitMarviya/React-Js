// eslint-disable-next-line no-unused-vars
import React from 'react'
export default function ListKey() {
    const arr = [ "Alex" , "Broad" , "Clark" ,"David"];
    const arrayObj = [
        {name: "Alex" , age: 25 },
        {name: "Broad" , age: 30 },
        {name: "Clark" , age: 35 },
        {name: "David" , age: 40 }
    ];
  return (
    <>
    <h2>Array List</h2>
{
    arr.map((e,i)=>{
        return <p key={i}>{e}</p>
    })

}
<h2>ArrayObject List</h2>
{
    arrayObj.map((e,i)=>{
      return  <p key={i}>{e.name}-{e.age}</p>
    })
        

}
    </>
  )
}
