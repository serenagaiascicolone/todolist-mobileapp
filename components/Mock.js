import { ImageBackground, Text, View, TextInput, Button, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts, Caveat_400Regular} from '@expo-google-fonts/caveat'
import {LinearGradient} from "expo-linear-gradient"

export default function Mock () {
    const [fontLoaded, fontError] = useFonts({Caveat_400Regular})
    const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})

    if(!fontLoaded && !fontError){
        return null
    }

    if(!RobotoLoaded && !RobotoError){
        return null
    }

    return (
 
    <>
    {/* header */}
    <ImageBackground 
        style={styles.backgroundImage}
        source={require('../assets/img/pexels-cottonbro-studio-5190680.jpg')} 
        resizeMode={'cover'}>

            <LinearGradient 
                colors={[
                    'rgba(191, 140, 111, 0.5)',
                    'rgba(191, 140, 111, 0.5)'
                ]}>
        <View style={styles.header}>
            <Text style={{fontFamily : 'Caveat_400Regular', fontSize: 40}}> Todo List </Text>
        </View>

        </LinearGradient>
    </ImageBackground>

    {/* Main */}
    <View style={styles.main}>
       
        <View >
        <Text 
        style={{
        fontFamily: 'Caveat_400Regular', 
        fontSize: 30, 
        textAlign: 'center', 
        textTransform: 'uppercase',
        padding: 20,
        backgroundColor: '#A64444'
        }}>
            I miei task
        </Text>
        </View>

        {/* form */}
       <View style={styles.addAndFitlersTask}>
            <View style={styles.addTask}>
                <TextInput 
                placeholder="scrivi il tuo task"
                />
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Aggiungi</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.filterContainer}>
                <Text> filtra: </Text>
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Tutti </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Rimasti </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Completati </Text>
                </TouchableOpacity>
            </View>


       </View>
    </View>
    
    </>
    )
}

const styles = StyleSheet.create ({
    // header
    header: {
        width: '100%',
        // backgroundColor: 'red',
        height: 120,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 1,
        
    },
    backgroundImage: {
        backgroundColor: '#00000060',
    },
    title: {
        fontFamily: '',
    },
    // main
    main: {
        display: 'flex',
        backgroundColor: 'rgb(141, 187, 200)',
        width: '100%',
        height: '100%'
    }, 
    headerMain : {
        textAlign: 'center'
    },

    //form
    addAndFitlersTask : {
        display: 'flex',
        backgroundColor: '#EBEDF2',
        padding: 20,
        gap: 14,
        alignItems: 'center',
    },
    addTask: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    addButton: {
        borderRadius: 50,
        backgroundColor: '#bf8c6f',
        fontFamily: 'Caveat_400Regular',
        paddingVertical: 5,
        paddingHorizontal: 16,
    },
    filterContainer : {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    }
})