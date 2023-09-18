import { Text, View} from "react-native"



export default function HeaderMain ({useRoboto, useCaveat}) {
    return (
        <View>
        <Text 
        style={{
        fontFamily: 'Roboto_400Regular', 
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center', 
        textTransform: 'uppercase',
        padding: 20,
        backgroundColor: '#A64444',
        }}>
            I miei task
        </Text>
        </View>
    )
}