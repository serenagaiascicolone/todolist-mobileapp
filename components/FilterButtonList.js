import { Text, View } from "react-native"
import { StyleSheet } from "react-native"

import FilterButton from "./FilterButton"

export default function FilterButtonList ({useRoboto, useCaveat}) {
    return (
        <View style={styles.filterContainer}>
        <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize'}}> filtra: </Text>
        <FilterButton useRoboto={useRoboto} useCaveat={useCaveat}/>
    </View>
    )
}

const styles = StyleSheet.create ({
    filterContainer : {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }, 
})