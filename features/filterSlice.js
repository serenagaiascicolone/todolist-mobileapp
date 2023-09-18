import {createSlice} from '@reduxjs/toolkit'



export const filters = {
    Tutti: () => true,
    Rimasti: task => !task.completed,
    Completati: task => task.completed, 
}

export const filterSlice = createSlice ({
    name: 'filter',
    initialState: 'Tutti',
    reducers: {
        filterTask: (state, action) => {
        return action.payload
        }
    }
})

export const {filterTask} = filterSlice.actions

export const selectFilter = (state) => state.filter
export const selectedFilter = (state) => filters[state.filter]

export default filterSlice.reducer