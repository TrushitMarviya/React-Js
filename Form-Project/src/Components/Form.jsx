// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './Form.css'
export default function form() {
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
    const [email,setEmail] = useState(" ")
    // eslint-disable-next-line react-hooks/rules-of-hooks, no-unused-vars
    const [pass,setPass] = useState(" ")

    // setName(inputRef)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const inputRef = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const passRef = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect (()=>{
        setEmail(inputRef)
        setPass(passRef)
        setTimeout(()=>{
        inputRef.current.focus();
        },500)
    },[])
    const handleclick = (event)=>{
      event.preventDefault()
      let em = inputRef.current.value
      let pw = passRef.current.value
      alert(`Your Email Address : ${em} \nYour Password is : ${pw}`)
      console.log(`Email is : ${em}`);
      console.log(`Password is : ${pw}`);
      
    }
  return (
    <>
    <div className='container'>
    <div className='row '>
      <form onSubmit={((event)=>handleclick(event))}>
    <center>
        <p className='name'>Login</p>
        <input type='email' placeholder="Enter email" id='in1' required ref={inputRef} />
        <input type='password' placeholder="Enter password" required ref={passRef} id='in2'/> <br/>
        <button id='btn-1' type='Submit'>LOGIN</button>
    </center>
    </form>
      </div>
    </div>
    </>
  )
}
