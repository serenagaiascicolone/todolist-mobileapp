import {createSlice} from '@reduxjs/toolkit'
// import {AsyncStorage} from 'react-native';
// import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid/non-secure'; 
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 

const initialState = {
    tasks: [],
    status: 'init',
    filter: 'tutti'
}
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            state.status = 'added';
            const newTask ={
                id: nanoid(),
                name: action.payload,
                completed: false
            }
            state.tasks.push(newTask)
        },
        deleteTask: (state, action) => {
            state.status = 'delete';
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
        },
        toggleTask: (state, action) => {
            state.status = 'toggle task';
            const task = state.tasks.find(task => task.id === action.payload)
            task.completed = !task.completed
        },
        editingTask: (state, action) => {
            state.status = 'editing task';
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.name = action.payload.name 
        }, 
    }
})

export const {addNewTask, deleteTask, toggleTask, editingTask} = taskSlice.actions

export const selectTask = (state) => state.task.tasks;

export default taskSlice.reducer 