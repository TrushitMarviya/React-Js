import { createSlice } from "@reduxjs/toolkit";

export const count = createSlice ({
    name: 'count',
    initialState : {
        Student : []
    },
    reducers :{
        AddData:(state,action)=>{
            state.Student.push(action.payload)
        },
        DeleteData:(state,action)=>{
        let data = state.Student.filter((e)=>e.id != action.payload)
        state.Student = data
    },
    UpdateData :(state , action)=>{
    state.Student.map((e)=>{
        if(e.id == action.payload.id){
            e.name = action.payload.name
            e.age = action.payload.age
        }else{
            e
        }
    })
    }
}
})

export const {AddData , DeleteData,UpdateData} = count.actions
export default count.reducer