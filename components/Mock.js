import { ImageBackground, Text, View, TextInput, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts as useCaveat, Caveat_400Regular} from '@expo-google-fonts/caveat'
import {LinearGradient} from "expo-linear-gradient"
// import Ionicons from '@expo/vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Mock () {
    const [caveatLoaded, caveatError] = useCaveat({Caveat_400Regular})
    const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})

    if(!caveatLoaded && !caveatError){
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
                    'rgba(191, 140, 111, 0.7)',
                    'rgba(191, 140, 111, 0.7)'
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
        fontFamily: 'Roboto_400Regular', 
        fontSize: 25, 
        fontWeight: 'bold',
        textAlign: 'center', 
        textTransform: 'uppercase',
        padding: 20,
        backgroundColor: '#A64444'
        }}>
            I miei task
        </Text>
        </View>


       <View style={styles.addAndFitlersTask}>
        {/* form */}
            <View style={styles.addTask}>
                <TextInput 
                placeholder="scrivi il tuo task"
                style={styles.addTaskInput}
                />
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16}}> Aggiungi</Text>
                </TouchableOpacity>

            </View>

            {/* filterButtonList */}
            <View style={styles.filterContainer}>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize'}}> filtra: </Text>
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
  
        {/* TaskContainer  */}
    <View>
            {/*TaskCounter*/}
            <View style={styles.counterContainer}>
                <Text style={{fontFamily: 'Roboto_400Regular', fontSize: 16, fontWeight: 'bold'}}> 1 task in questa lista </Text>
            </View>

        <View style={styles.tasksContainer}>  


            <View style={styles.taskContainer}>
                <View>
                    {/* fleg */}
                <Ionicons name="checkmark-circle-outline" style={styles.iconFlag}/>
                </View>
                <View>
                    {/* close */}
                <Ionicons name="close-circle-outline" style={styles.iconClose}/>
                </View>

                <Text style={{fontFamily: 'Roboto_400Regular', fontWeight: 400, paddingVertical: 30, textAlign: 'center'}}> Cenare </Text>   
                
                <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16, textAlign: 'center'}}> Modifica </Text>
                </TouchableOpacity>
                </View>

            </View>

            <View style={styles.taskContainer}>
                <View>
                    {/* fleg */}
                <Ionicons name="checkmark-circle-outline" style={styles.iconFlag}/>
                </View>
                <View>
                    {/* close */}
                <Ionicons name="close-circle-outline" style={styles.iconClose}/>
                </View>

                <Text style={{fontFamily: 'Roboto_400Regular', fontWeight: 400, paddingVertical: 30, textAlign: 'center'}}> Cenare </Text>   
                
                <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.addButton} >
                    <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16, textAlign: 'center'}}> Modifica </Text>
                </TouchableOpacity>
                </View>

            </View>

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
        height: '100%',
        // overflow: 'visible',
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
    addTaskInput: {
        flex: 1,
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
    }, 
    tasksContainer : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        padding: 5,
        justifyContent: 'center',
        // height: '100%',
        overflow: 'scroll',
    },

    counterContainer:{
        textAlign: 'start',
        paddingVertical: 16,
        paddingHorizontal: 30,
    },

    taskContainer : {
        width: '50%',
        display: 'flex',
        gap: 1,
        padding: 30,
        // justifyContent: 'center',
        backgroundColor: '#ebedf2cc',
        position: 'relative',
    },
    iconFlag: {
        fontSize: 20,
        color: '#bf8c6f',
        position: 'absolute',
        left: 0,
        right: 10,
        margin: 1,
    },
    iconClose: {
        fontSize: 20,
        color: '#bf8c6f',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    buttonsContainer: {
        display: 'flex',
        marginTop: 'auto',
        gap: 7,
        justifyContent: 'center',
    }

})