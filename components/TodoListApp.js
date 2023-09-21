
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts as useCaveat, Caveat_400Regular} from '@expo-google-fonts/caveat'
import Header from './Header';
import HeaderMain from './HeaderMain';
import Form from './Form';
import FilterButtonList from './FilterButtonList';
import TasksContainer from './TasksContainer';
import { useSelector } from 'react-redux';
import { selectTask } from '../features/taskSlice';
import LoaderSpinner from './LoaderSpinner';

import { useEffect, useState } from 'react';




export default function TodoListApp () {
    //  MEMORIZZO TASKS IN ASYNC STORAGE
  const tassks = useSelector(selectTask)

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

//   useEsffect(() =>{
//     getData(tasks)
//   },[tasks])

    const [caveatLoaded, caveatError] = useCaveat({Caveat_400Regular})
    const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})
    
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const loadingPage = setTimeout(() =>{
            setIsLoading(false)
        },5000)
        return () => clearTimeout(loadingPage)
    },[])

    if(!caveatLoaded && !caveatError){
        return null
    }
  
    if(!RobotoLoaded && !RobotoError){
        return null
    }

    return (
        <>
        {isLoading && <LoaderSpinner />}
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
        </>
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