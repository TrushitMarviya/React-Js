import { configureStore } from "@reduxjs/toolkit";
import count from "../Confige/CrudSlice";

export const store = configureStore({
  reducer: {
    crudKey: count,
  },
});