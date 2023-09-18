import {  Text, TouchableOpacity} from "react-native"
import { StyleSheet } from "react-native"




export default function FilterButton ({useRoboto, useCaveat}) {
    return (
        <>
        <TouchableOpacity style={styles.button} >
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Tutti </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Rimasti </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} >
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Completati </Text>
        </TouchableOpacity>
        </>
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
})