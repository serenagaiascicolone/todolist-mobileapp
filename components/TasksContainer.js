import { View } from "react-native"
import { StyleSheet } from "react-native"
import TaskCounter from "./TaskCounter"
import Task from "./Task"

export default function TasksContainer ({useCaveat, useRoboto}) {
    return (
        <View style={styles.tasksContainer}>  
            <TaskCounter useRoboto={useRoboto}/>
            <Task useRoboto={useRoboto} useCaveat={useCaveat}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    tasksContainer : {
        display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        padding: 5,
        // height: '100%',
        alignItems: 'center',
        gap: 16,
        // flex: 1,
        flexGrow: 1,  
    },
  
})