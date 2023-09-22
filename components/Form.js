import { Text, View, TextInput, TouchableOpacity, Platform} from "react-native"
import { StyleSheet } from "react-native"
import { addNewTask } from "../features/taskSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"

export default function Form ({useRoboto, useCaveat}) {

const [newTask, setNewTask] = useState()
const dispatch = useDispatch()
    
function handleAddTask () {
    dispatch(addNewTask(newTask))
    setNewTask('')
}

    return (
        <View style={styles.addTask}>
        <TextInput 
        placeholder="scrivi il tuo task"
        style={styles.addTaskInput}
        onChangeText={(text) => setNewTask(text)}
        value={newTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Aggiungi</Text>
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create ({
    addTask: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        gap: 10,
    },
    addTaskInput: {
        flex: 1,
    },
    button: {
        borderRadius: 50,
        backgroundColor: '#bf8c6f',
        fontFamily: 'Caveat_400Regular',
        paddingVertical: 5,
        paddingHorizontal: 16,
    },
})