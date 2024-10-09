// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import Compo2 from './Compo2';
// eslint-disable-next-line react-refresh/only-export-components
export const myContext = createContext()
export default function Compo1() {
    // eslint-disable-next-line no-unused-vars
    const [count , setCount] = useState(0);
  return (
    <>
      <h1>Component-1</h1>
      <myContext.Provider value={count}>
        <Compo2/>
      </myContext.Provider>
    </>
  )
}
