// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

export default function Searching() {
    const [name,setName]=useState('');
    const arr = [
        {name:"Anthony", age :30},
        {name:"Andrew", age :35},
        {name:"Anderson", age :42},
        {name:"Baalaark", age :40},
        {name:"Baalkrishan", age :25},
        {name:"Baasim" , age : 28},
        {name:"Xanthos" , age : 20},
        {name:"Xanthe" , age : 18},
        {name:"Xander" , age : 28},
        {name:"Xavier" , age : 28}
    ]
    const data = arr.filter((item)=>item.name.includes(name)) 
  return (
    <>
      <center>
        <h1>Searching</h1> <br/>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
        {
            data && 
            data.map((e,i) => {
            return <ul key={i} style={{listStyle:"none"}}>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    </ul>
            })
    }
      </center>
    </>
  )
}
