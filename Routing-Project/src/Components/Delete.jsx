// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
export default function Delete({data,setData}) {
const[id,setId] = useState('');
const navigate = useNavigate();
const handleDelete =() =>{
    // eslint-disable-next-line react/prop-types
    const deleteData = data.filter((item)=>item.id != id)
    setData(deleteData)
    navigate('/')
}
  return (
    <>
    <center> <br /><br />
        <h1>Delete</h1>
        <input type="text" placeholder='Enter ID No' onChange={(e)=>setId(e.target.value)}/> <br />
        <button id='bt2'onClick={handleDelete} >DeleteData</button>
    </center>  
    </>
  )
}
