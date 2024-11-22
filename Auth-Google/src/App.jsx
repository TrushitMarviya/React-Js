// eslint-disable-next-line no-unused-vars
import React from 'react'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
