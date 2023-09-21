import { FlatList, View } from "react-native"
import { StyleSheet } from "react-native"
import { selectTask } from "../features/taskSlice"
import { useSelector } from "react-redux"
import TaskCounter from "./TaskCounter"
import Task from "./Task"
import {selectedFilter} from "../features/filterSlice"


export default function TasksContainer ({useCaveat, useRoboto}) {

const tasks = useSelector(selectTask)
const filters = useSelector(selectedFilter)
const taskList = tasks.filter(filters)

 
    return (
        <View style={styles.tasksContainer}>  
            <TaskCounter useRoboto={useRoboto} taskNumber={taskList.length}/>
            {taskList.map(task => (
                <Task  
                useRoboto={useRoboto} 
                useCaveat={useCaveat}
                task={task} 
                key={task.id}
                />
            ))}
          
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
