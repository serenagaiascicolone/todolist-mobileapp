import { FlatList, View } from "react-native"
import { StyleSheet } from "react-native"
import { selectTask } from "../features/taskSlice"
import { useSelector } from "react-redux"
import TaskCounter from "./TaskCounter"
import Task from "./Task"

export default function TasksContainer ({useCaveat, useRoboto}) {

const tasks = useSelector(selectTask)

let TaskList = ({task}) => {
    return (
        <Task 
        useRoboto={useRoboto} 
        useCaveat={useCaveat}
        task={task}
        />
    )
}   
    return (
        <View style={styles.tasksContainer}>  
            <TaskCounter useRoboto={useRoboto} taskNumber={tasks.length}/>
            <FlatList
            style={styles.flatListTask}
            contentContainerStyle={{flexGrow: 1, gap: 16, alignItems: 'center'}} 
            data={tasks}
            renderItem={({item}) => <TaskList task={item}/>}
            keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    tasksContainer : {
        display: 'flex',
        padding: 5,
        alignItems: 'center',
        width: '100%',
        flex: 1,
        gap: 16,
   
    },
    flatListTask: {
        display: 'flex',
        
    }
})
