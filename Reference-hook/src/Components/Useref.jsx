// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'

export default function Useref() {
    const inputRef = useRef();
    const handleClick = ()=>{
        inputRef.current.focus();
        let p = inputRef.current.value
        alert(`The Value is : ${p}`)
    }
  return (
    <>
    <h2>UserReference</h2>
    <input type='Text' ref={inputRef}  />
    <button onClick={handleClick}>Click</button>
    </>
  )
}
