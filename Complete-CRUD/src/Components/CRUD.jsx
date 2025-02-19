// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
export default function CRUD() {
  const [name,setName] = useState("")
  const [sub,setSub] = useState("")
  const [city,setCity] = useState("")
  const [record,setRecord] = useState(null)
  const [edit,setEdit] = useState(null)
  useEffect(()=>{
    let Data = JSON.parse(localStorage.getItem("Record")) || []
    setRecord(Data)
  },[])
  
  const handleAdd = () =>{
    let user = {id:record.length+1, name,sub,city}
    let oldRec = JSON.parse(localStorage.getItem("Record")) || []
    if (edit) {
      let singData = record.find((item)=>item.id == edit)
      singData.id = edit
      singData.name = name
      singData.sub = sub
      singData.city = city 
      localStorage.setItem("Record",JSON.stringify(record))
      setEdit(null)
    }else{
      oldRec.push(user)
      setRecord(oldRec)
      localStorage.setItem("Record",JSON.stringify(oldRec))
      setName("")  
      setSub("")
      setCity("")
    }
   }
   const handleDelete = (id)=>{
    let deleteData = record.filter((item)=>item.id != id)
    setRecord(deleteData)
    localStorage.setItem("Record",JSON.stringify(deleteData))
   }
   const handleEdit = (id)=>{
    let editData = record.find((item)=>item.id == id)
    setName(editData.name)
    setSub(editData.sub)
    setCity(editData.city)
    setEdit(id)
   }
  return (
    <>
    <center>
        <h1>CRUD Operations</h1>
        <br /><br />
        <input type="text" value={name}  placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} /> <br /><br />
        <input type="text" value={sub} placeholder='Enter Subject' onChange={(e)=>setSub(e.target.value)} /> <br /><br />
        <input type="text" value={city} placeholder='Enter City' onChange={(e)=>setCity(e.target.value)} /> <br /><br />
        <button id='bt1' onClick={handleAdd}>{edit ? "Update" : "Add"}</button>
    </center>
    <br /><br />
    <table border="1" width="80%">
        <thead>
      <tr>
        <th >Id</th>
        <th>Name</th>
        <th>Subject</th>
        <th>City</th>
        <th colSpan={2}>Actions</th>
      </tr>
      </thead>
      <tbody>
        {
         record ? 
         record.map((e,i)=>{
          return <tr key={i}>
            <td width={"200px"}>{e.id}</td>
            <td width={"200px"}>{e.name}</td>
            <td width={"200px"}>{e.sub}</td>
            <td width={"200px"}>{e.city}</td>
            <td width={"400px"}><button id='bt2' onClick={()=>handleDelete(e.id)}>Delete</button><button id='bt3' onClick={()=>handleEdit(e.id)}>Edit</button></td>
          </tr>
         })
         : ""
        }
      </tbody>
    </table>
    </>
  )
}