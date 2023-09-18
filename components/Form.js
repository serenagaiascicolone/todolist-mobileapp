import { Text, View, TextInput, TouchableOpacity} from "react-native"
import { StyleSheet } from "react-native"


export default function Form ({useRoboto, useCaveat}) {
    return (
        <View style={styles.addTask}>
        <TextInput 
        placeholder="scrivi il tuo task"
        style={styles.addTaskInput}
        />
        <TouchableOpacity style={styles.button} >
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Aggiungi</Text>
        </TouchableOpacity>

    </View>
    )
}

const styles = StyleSheet.create ({
    addTask: {
        display: 'flex',
        flexDirection: 'row',
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