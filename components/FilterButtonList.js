import { Text, View } from "react-native"
import { StyleSheet } from "react-native"
import { filters } from "../features/filterSlice"
import FilterButton from "./FilterButton"

export default function FilterButtonList ({useRoboto, useCaveat}) {

let Button = Object.keys(filters).map(name => (
    <FilterButton 
    useRoboto={useRoboto} 
    useCaveat={useCaveat}
    key = {name}
    name = {name}
    />

))

    return (
        <View style={styles.filterContainer}>
        <Text style={{fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto_400Regular',
         fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize'}}> filtra: </Text>
        {Button}
    </View>
    )
}

const styles = StyleSheet.create ({
    filterContainer : {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    
      
    }, 
})