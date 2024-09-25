// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function LocalCRUD() {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[tel,setTel] = useState("")
    const[record,setRecord] = useState(null)
    const[edit,setEdit] = useState(null)
    useEffect(()=>{
        let Data = JSON.parse(localStorage.getItem("Record")) || []
        setRecord(Data)
    },[])
    const handleAdd = () =>{
        let Obj = {id:Date.now(),name,email,tel}
        record.push(Obj)
        localStorage.setItem("Record",JSON.stringify(record))


        setName("")
        setEmail("")
        setTel("")

    }
    const handleDelete = (id) =>{
        let deleteData = record.filter((item)=>item.id != id);
        setRecord(deleteData)
        localStorage.setItem("Record",JSON.stringify(deleteData))
    }
    const handleEdit = (id) =>{
        let editData = record.find((item)=>item.id == id);
        setName(editData.name)
        setEmail(editData.email)
        setTel(editData.tel)
        setEdit(id)        
    }
  return (
    <>
 <center>
    <h1>Local-Input</h1>
    <input type="text"  value={name} placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/><br/><br/>
    <input type="email"  value={email} placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)}/><br/><br/>
    <input type='num' value={tel} placeholder='Enter Mobile No' onChange={(e)=> setTel(e.target.value)}/><br/><br/>
    <button onClick={handleAdd}>{edit ? "Update" : "Add"}</button>
    <br/><br/>
    </center>

    <table border="1"width="100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th colSpan={2}>Buttons</th>

            </tr>
        </thead>
        <tbody>
        {
            record ?
            record.map((e,i)=>{
            return   <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.tel}</td>
                    <td><button id='edit' onClick={()=>handleEdit(e.id)}>Edit</button><button id='delete' onClick={()=>handleDelete(e.id)}>Delete</button></td>
                </tr>
            })
            : ""
        }
        </tbody>
    </table>
    </>
  )
}
