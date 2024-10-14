import { configureStore } from "@reduxjs/toolkit";
import  count  from "../Configure/CrudSlice";

export const store = configureStore({
    reducer: {
        crudKey : count
    }
})