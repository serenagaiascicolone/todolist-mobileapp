import {  Text, TouchableOpacity} from "react-native"
import { StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { filterTask, selectFilter } from "../features/filterSlice"

export default function FilterButton ({useRoboto, useCaveat, name}) {
let dispatch = useDispatch()   
const filter = useSelector(selectFilter)
    function handleFilterButton () {
     dispatch(filterTask(name))
   }
   
    return (
        <>
        <TouchableOpacity style={[styles.button, name === filter ?  styles.active : '']} onPress={handleFilterButton}>
            <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> {name} </Text>
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
    active : {
        backgroundColor: '#A64444',
    }
})