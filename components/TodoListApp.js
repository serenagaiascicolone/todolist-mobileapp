
import { StyleSheet, View, Dimensions} from 'react-native';
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts as useCaveat, Caveat_400Regular} from '@expo-google-fonts/caveat'
import Header from './Header';
import HeaderMain from './HeaderMain';
import Form from './Form';
import FilterButtonList from './FilterButtonList';
import TasksContainer from './TasksContainer';
import LoaderSpinner from './LoaderSpinner';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect, useState } from 'react';




export default function TodoListApp () {
    // initial page app
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {
            const loadingPage = setTimeout(() =>{
                setIsLoading(false)
            },5000)
            return () => clearTimeout(loadingPage)
        },[])

// google fonts
const [caveatLoaded, caveatError] = useCaveat({Caveat_400Regular})
const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})

if(!caveatLoaded && !caveatError){
    return null
}

if(!RobotoLoaded && !RobotoError){
    return null
}

// width and height 100vh/wv
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


    
    return (
        <>
        {isLoading && <LoaderSpinner/>}
        <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'} 
        style={[{width: width, height: height}, styles.main]} >
        <Header />
        <HeaderMain />
        <View style={styles.addAndFitlersTask}> 
        <Form />
        <FilterButtonList /> 
        </View>
        <TasksContainer />
        </KeyboardAwareScrollView>
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