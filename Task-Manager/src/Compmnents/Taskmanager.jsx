import { useEffect, useState } from 'react'

export default function Taskmanager() {
    const [task,setTask] = useState("")
    const [status,setStatus] = useState("Pending")
    const [record,setRecord] = useState([])

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("DataRecord")) || []
        setRecord(data)
    }, []);

    const handleAdd = () => {
        let Obj = {id:Date.now(),task,status};
        let oldRecord = JSON.parse(localStorage.getItem("DataRecord")) || [];
        oldRecord.push(Obj)
        localStorage.setItem("DataRecord",JSON.stringify(oldRecord))
        setRecord(oldRecord)
        };

        const handleDelete = (id) => {
        let deleteData = record.filter ((item)=>item.id != id )
        setRecord(deleteData)
        localStorage.setItem("DataRecord",JSON.stringify(deleteData))
        };

        let handleStatus = (id) =>{
            let data = record.map((item)=>{
                if(item.id == id){
                    return {...item,status:"Completed"};
                    }
                    return item;
                    })
                    setRecord(data)
                    localStorage.setItem("DataRecord",JSON.stringify(data))
        }
        let handleEdit = ()=> {
            setStatus("Complete")
        }
        
  return (
    <>
    <center>
        <br />
        <h1>Task Manager</h1>
        <br /><br />
        <input type="text" value={task} placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button id='bt1' onClick={handleAdd}>Add Task</button>
        <br /><br />
        <table border={2} width={"60%"}>
        <thead>
            <tr>
                <td>Id</td>
                <td>Task</td>
                <td>Status</td>
                <td colSpan={3}>Actions</td>
            </tr>
        </thead>
        <tbody>
            {
                record ?
                 record.map((e,i)=>{
                    return( <tr key={i}>
                        <td>{e.id}</td>
                        <td>{e.task}</td>
                        <td>{e.status}</td>
                        <td><button onClick={()=>handleEdit(e.id)}>Edit</button><button onClick={()=>handleDelete(e.id)}>Delete</button><button onClick={()=>handleStatus(e.id)}>Complete</button></td>
                    </tr>
                    );
                })
                : ""
            }
        </tbody>
        </table>
        </center>
    </>
  )
}





