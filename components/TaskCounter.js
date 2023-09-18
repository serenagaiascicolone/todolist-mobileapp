import {Text, View} from "react-native"
import { StyleSheet } from "react-native"


export default function TaskCounter ({useRoboto, taskNumber}) {
    return (
    <View style={styles.counterContainer}>
        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, fontWeight: 'bold'}}> {taskNumber} task in questa lista </Text>
    </View>
    )

}

const styles = StyleSheet.create ({
    counterContainer:{
        width: '100%',
        paddingVertical: 10,
        // paddingHorizontal: 30,
    },
})