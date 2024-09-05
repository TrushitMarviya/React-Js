import React, { useState } from 'react'
import Navbar from './Navbar'

export default function App() {
  let name = "Alex"
  let age = 20
  const [count , setCount] = useState(0)
  let num = ()=>{
    setCount(count+1)
  }
return (
    <div>
      <Navbar name={name}/>
      <Navbar name={age}/>
      <p>{
        count
        }</p>
      <button onClick={num}>Increase</button>
    </div>
  )
}
