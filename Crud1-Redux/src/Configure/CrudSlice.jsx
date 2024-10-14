import { createSlice } from "@reduxjs/toolkit";

export const count = createSlice({
    name:"count",
    initialState:{
       Student : []
    },
    reducers:{
        AddData:(state,action)=>{
            state.Student.push(action.payload)
        },
        DeleteData:(state,action)=>{
            let data =state.Student.filter((e)=>e.id != action.payload)
            state.Student = data
        }
    }
})
export const {AddData,DeleteData} = count.actions
export default count.reducer