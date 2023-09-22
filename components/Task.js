import { useState } from "react";
import {Text, View, TextInput, TouchableOpacity, Pressable } from "react-native"
import { StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import { deleteTask, editingTask, toggleTask } from "../features/taskSlice";
import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";


export default function Task ({useCaveat, useRoboto, task}) {

// switch mode task: edit/task 
const [isEditing, setIsEditing] = useState(false)
const [taskEdited, setTaskEdited] = useState(task.name)
const editInputRef = useRef(null)
// const [isActive, setIsActive] = useState(false)
let dispatch = useDispatch()

// cancella task 
function handleDeleteTask (){
    dispatch(deleteTask(task.id))
}

//salva modifica task
function handleEditingTask () {
    dispatch(editingTask({id: task.id, name: taskEdited}))
    setIsEditing(false)
}

//flaggare task completed 
function handleToggleTask () {
    dispatch(toggleTask(task.id))

}

// focus su textarea quando clicchiamo su modifica 
useEffect(() => {
    if(isEditing) {
    editInputRef.current.focus()
    }
},[isEditing])

let taskView = (

        <>    
        <View>
        {task.completed ?
        <Ionicons name="checkmark-circle-sharp" style={styles.iconFlagAndBack} onPress={handleToggleTask}/>
        :
        <Ionicons name="checkmark-circle-outline" style={styles.iconFlagAndBack} onPress={handleToggleTask}/>
        }
        </View>
        <View>
            {/* close */}
        <Ionicons name="close-circle-outline" style={styles.iconClose} onPress={handleDeleteTask}/>
        </View>

        
        <Text style={
           
            [{fontFamily: 'Roboto_400Regular'}, styles.tasktext,  task.completed ? styles.completed : '' ]}> 
        {task.name} </Text>   
        
        <View style={styles.buttonsContainer}>
        
        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(true)}>
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16, textAlign: 'center'}}> Modifica </Text>
        </TouchableOpacity>
       
        </View>


</>
)

let taskEdit = (
        
    <>

        <View>
            {/* close */}
        <Ionicons name="arrow-back-circle-outline" style={styles.iconFlagAndBack} onPress={() => setIsEditing(false)}/>
        </View>

        <TextInput 
        ref={editInputRef}
        editable
        multiline
        numberOfLines={5}
        maxLength={100}
        style={{paddingVertical: 0, textAlign: 'center', marginTop: 32, color:'#A64444'}}
        padding={10}
        value={taskEdited}
        onChangeText={(text) => setTaskEdited(text)}
        // defaultValue={'prova'}
        
        />   
        
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEditingTask} >
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16, textAlign: 'center'}}> Salva </Text>
        </TouchableOpacity>
        </View>
    </>
)
    
return (
    <View style={styles.taskContainer}>
        {isEditing ? taskEdit : taskView}
    </View>
)

}


const styles = StyleSheet.create ({
    button: {
        borderRadius: 50,
        backgroundColor: '#bf8c6f',
        fontFamily: 'Caveat_400Regular',
        paddingVertical: 5,
        paddingHorizontal: 16,
    },
    taskContainer : {
        width: 200,
        // height: 200,
        display: 'flex',
        // gap: 1,
        padding: 32,
        backgroundColor: '#ebedf2cc',
       
    },
    iconFlagAndBack: {
        fontSize: 30,
        color: '#bf8c6f',
        position: 'absolute',
        left: 0,
        right: 0,
     
        
       
    },
    iconClose: {
        fontSize: 30,
        color: '#bf8c6f',
        position: 'absolute',
        top: 0,
        right: 0,
        // margin: 16
    },
    buttonsContainer: {
        display: 'flex',
        marginTop: 'auto',
        gap: 7,
        justifyContent: 'center',
    },
    tasktext: {
        fontWeight: 400, 
        paddingVertical: 30, 
        textAlign: 'center', 
        marginTop: 32,
      
    },
    completed: {
        textDecorationLine: 'line-through'
    }
})