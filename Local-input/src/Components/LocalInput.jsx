// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function LocalInput() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[num,setNum]=useState("")
    const[record,setRecord]=useState(null)
        useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("StudentData"))|| []
        setRecord(data)        
    },[record])
    const handleAdd = () =>{
        let user ={Id:Date.now(),name,email,num};
        record.push(user);
        localStorage.setItem("StudentData",JSON.stringify(record))
    }
  return (
    <div>
    <center>
    <h1>Local-Input</h1>
    <input type="text"  placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/><br/><br/>
    <input type="email"  placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/><br/><br/>
    <input type='num' placeholder='Enter Mobile No' onChange={(e)=> setNum(e.target.value)}/><br/><br/>
    <button onClick={handleAdd}>Click</button>
    <br/><br/>
    <table border="5" width="45%">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mo-Number</th>
            </tr>
        </thead>
        <tbody>
        {
            record ?
            record.map((e,i)=>{
                return <tr key={i}>
                    <td>{e.Id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.num}</td>
                </tr>
            })
            :
            <tr><td>Loading...</td></tr>
        }
        </tbody>
    </table>
    </center>
    </div>
  )
}
