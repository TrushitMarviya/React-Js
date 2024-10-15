// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData, DeleteData, UpdateData } from '../Confige/CrudSlice';
export default function CrudRedux() {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [index,setIndex] = useState(null)
    const count1 = useSelector((state)=>{
      return state.crudKey
    });
    const dispatch = useDispatch();
    const handleAdd = () =>{
      if(index == null){
        dispatch(AddData({id:Date.now(),name:name , age:age}));
      }else{
        dispatch(UpdateData({id:index , name:name , age : age}))
        setIndex(null)
      }
      setName('')
      setAge('')
    } 
    const HandleDelete = (id) =>{
      dispatch(DeleteData(id))
    }
    const HandleEdit = (id) =>{
      let SingleData = count1.Student.find((item)=>item.id == id)
      setIndex(id)
      setName(SingleData.name)
      setAge(SingleData.age)
    }
  return (
    <>
      <center>
        <h1>CRUD Redux</h1>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} value={name}/> <br /><br />
        <input type="text" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} value={age}/> <br /><br />
        <button id='bt1' onClick={handleAdd} >{index ? "UpdateData" : "AddData"}</button> <br /><br /><br />
        <table border={2} width={"60%"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
          { 
      count1
        ? count1.Student.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>
                  <button id='bt2' onClick={() => HandleDelete(e.id)}>Delete</button>
                  <button id='bt3' onClick={() => HandleEdit(e.id)}>Edit</button>
                </td>
              </tr>
            );
          })
        : " "}
          </tbody>
        </table>

      </center>3
    </>
  )
}
