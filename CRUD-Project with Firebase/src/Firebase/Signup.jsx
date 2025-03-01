// eslint-disable-next-line no-unused-vars
import React, { useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import{auth, db} from '../../firebaseConfig'
import {Link, useNavigate } from 'react-router-dom'
import { setDoc,doc } from 'firebase/firestore'


export default function Signup() {
    const [name,setName]=useState('')
    const [num,setNum]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()
    const handleAdd = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(data=>{
            setDoc(doc(db,"users",data.user.uid),{
                name,num,email
            })
        })
        navigate('/dashboard')
    }
  return (
    <>
    <center>
    <h1>Sign-up</h1>
    <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /> <br /><br />
    <input type="tel" placeholder='Enter Number' onChange={(e)=>setNum(e.target.value)} /> <br /><br />
    <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /> <br /><br />
    <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} /> <br /><br />
    <button onClick={handleAdd}>SignUp</button> <br /><br />
  <p style={{fontSize:"20px",color:"#757575"}}> already have an account&nbsp;&nbsp;<Link to={'/signin'} style={{fontSize:"20px"}}>Login</Link> </p>
    </center>
    </>
  )
}