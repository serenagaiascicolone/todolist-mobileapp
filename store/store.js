import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/taskSlice'
import filterReducer from '../features/filterSlice'

export const store = configureStore ({
    reducer: {
        task: taskReducer, 
        filter: filterReducer, 
    }
})