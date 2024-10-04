// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Update from './Components/Update'
export default function App() {
  const[data,setData]=useState(
    [
      {id:1,name:"Adam",email:"adam@gmail.com",num:"1020304050" },
      {id:2,name:"Brooke",email:"brooke@gmail.com",num:"6070809011"}
    ]
  )
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home data={data}/>}></Route>
      <Route path="/Create" element={<Create data={data} setData={setData}/>}></Route>
      <Route path="/Delete" element={<Delete data={data} setData={setData}/>}></Route>
      <Route path="/Update" element={<Update data={data} setData={setData}/>}></Route>
    </Routes>
    </BrowserRouter>  
    </>
  )
}
