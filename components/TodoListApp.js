
import { StyleSheet, View, ScrollView, Dimensions, DrawerLayoutAndroidComponent } from 'react-native';
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts as useCaveat, Caveat_400Regular} from '@expo-google-fonts/caveat'
import Header from './Header';
import HeaderMain from './HeaderMain';
import Form from './Form';
import FilterButtonList from './FilterButtonList';
import TasksContainer from './TasksContainer';
import { useSelector } from 'react-redux';
import { selectTask } from '../features/taskSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { storage } from '../features/taskSlice';
import { useDispatch } from 'react-redux';
import { getData } from '../features/taskSlice';



export default function TodoListApp () {
    //  MEMORIZZO TASKS IN ASYNC STORAGE
  const tasks = useSelector(selectTask)

//   const setData = async () => {
//     try {
//       await AsyncStorage.setItem('@tasks', JSON.stringify(tasks));
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   useEffect(() =>{
//     setData()
//   },[tasks])

//   useEffect(() =>{
//     getData(tasks)
//   },[tasks])

    const [caveatLoaded, caveatError] = useCaveat({Caveat_400Regular})
    const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    if(!caveatLoaded && !caveatError){
        return null
    }
  
    if(!RobotoLoaded && !RobotoError){
        return null
    }

    return (
        <ScrollView style={[{width: width, height: height}, styles.main]}>
        <Header useCaveat={useCaveat}/>
        <HeaderMain useRoboto={useRoboto} useCaveat={useCaveat} />
        <View style={styles.addAndFitlersTask}> 
        <Form useRoboto={useRoboto} useCaveat={useCaveat} />
        <FilterButtonList useRoboto={useRoboto} useCaveat={useCaveat} /> 
        </View>
        <TasksContainer useRoboto={useRoboto} useCaveat={useCaveat} />
        {/* <Footer useCaveat={useCaveat}/> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
      main: {
      display: 'flex',
      backgroundColor: 'rgb(141, 187, 200)',
      flex: 1,     
  
      }, 
      headerMain : {
      textAlign: 'center'
      },
      addAndFitlersTask : {
        display: 'flex',
        backgroundColor: '#EBEDF2',
        padding: 20,
        gap: 14,
        alignItems: 'center',
    },
  
  })