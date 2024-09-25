// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Local2() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[tel,setTel] = useState("")
    const[record,setRecord] = useState("")
    useEffect(()=>{
        let Data = JSON.parse(localStorage.getItem("Record")) || []
        setRecord(Data)
    },[record])
    const handleAdd = () =>{
        let Obj = {Id:Date.now(),Name:name,Email:email,Mobile:tel}
        record.push(Obj)
        localStorage.setItem("Record",JSON.stringify(record))
    }
  return (
    <>
    <center>
    <h1>Local-Input</h1>
    <input type="text"  placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/><br/><br/>
    <input type="email"  placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/><br/><br/>
    <input type='num' placeholder='Enter Mobile No' onChange={(e)=> setTel(e.target.value)}/><br/><br/>
    <button onClick={handleAdd}>Click</button>
    <br/><br/>
    </center>

    <table border="1"width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
        {
            record ?
            record.map((e,i)=>{
            return   <tr key={i}>
                    <td>{e.Id}</td>
                    <td>{e.Name}</td>
                    <td>{e.Email}</td>
                    <td>{e.Mobile}</td>
                </tr>
            })
            : ""
        }
        </tbody>
    </table>
    </>
  )
}
