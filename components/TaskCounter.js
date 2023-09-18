import {Text, View} from "react-native"
import { StyleSheet } from "react-native"


export default function TaskCounter ({useRoboto}) {
    return (
    <View style={styles.counterContainer}>
        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, fontWeight: 'bold'}}> 1 task in questa lista </Text>
    </View>
    )

}

const styles = StyleSheet.create ({
    counterContainer:{
        // alignSelf: 'start',
        paddingVertical: 10,
        // paddingHorizontal: 30,
    },
})