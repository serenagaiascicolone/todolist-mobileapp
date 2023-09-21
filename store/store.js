import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from '../features/taskSlice'
import filterReducer from '../features/filterSlice'
import { persistReducer } from "redux-persist";
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import thunk from "redux-thunk";

const reducers = combineReducers({
    task: taskReducer,
    filter: filterReducer,
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whiteList: 'tasks'
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore ({
    reducer: persistedReducer, 
    middleware: [thunk]
})

