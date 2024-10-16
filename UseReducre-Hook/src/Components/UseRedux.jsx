// eslint-disable-next-line no-unused-vars
import React, { useReducer } from 'react'
const initialState = 0;
const reducer = (state,action) => {
    switch (action) {
        case  "In1" :
        return state + 1 ;
        case  "In10" :
        return state + 10 ;
        case  "In100" :
        return state + 100 ;
        default:
            return state
    }
}
export default function UseRedux() {
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <>
    <center>
        <h1>{count}</h1>
        <button onClick={()=>dispatch("In1")}>1</button>
        <button onClick={()=>dispatch("In10")}>10</button>
        <button onClick={()=>dispatch("In100")}>100</button>
    </center>
    </>
  )
}
