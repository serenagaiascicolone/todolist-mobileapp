import { useState } from "react";
import {Text, View, TextInput, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Task ({useCaveat, useRoboto}) {

// switch mode task: edit/task 
const [isEditing, setIsEditing] = useState(false)
 
let taskView = (

        <>    
        <View>
            {/* fleg */}
        <Ionicons name="checkmark-circle-outline" style={styles.iconFlag}/>
        </View>
        <View>
            {/* close */}
        <Ionicons name="close-circle-outline" style={styles.iconClose}/>
        </View>

        <Text style={{fontFamily: 'Roboto_400Regular', fontWeight: 400, paddingVertical: 30, textAlign: 'center'}}> Dormire </Text>   
        
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
            {/* fleg */}
        <Ionicons name="checkmark-circle-outline" style={styles.iconFlag}/>
        </View>
        <View>
            {/* close */}
        <Ionicons name="arrow-back-circle-outline" style={styles.iconClose}/>
        </View>

        <TextInput 
        editable
        multiline
        numberOfLines={5}
        maxLength={100}
        style={{textAlign: 'center'}}
        padding={10}
        defaultValue={'prova'}
        />   
        
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsEditing(false)}>
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
        width: '60%',
        display: 'flex',
        gap: 1,
        padding: 30,
        // justifyContent: 'center',
        backgroundColor: '#ebedf2cc',
        // position: 'relative',
    },
    iconFlag: {
        fontSize: 20,
        color: '#bf8c6f',
        position: 'absolute',
        left: 0,
        right: 10,
        margin: 1,
    },
    iconClose: {
        fontSize: 20,
        color: '#bf8c6f',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    buttonsContainer: {
        display: 'flex',
        marginTop: 'auto',
        gap: 7,
        justifyContent: 'center',
    }
})