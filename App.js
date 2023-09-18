import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import {useFonts as useRoboto, Roboto_400Regular } from "@expo-google-fonts/roboto"
import {useFonts as useCaveat, Caveat_400Regular} from '@expo-google-fonts/caveat'
import Header from './components/Header';
import HeaderMain from './components/HeaderMain';
import Form from './components/Form';
import FilterButtonList from './components/FilterButtonList';
import TasksContainer from './components/TasksContainer';
import Footer from './components/Footer';

export default function App() {
  const [caveatLoaded, caveatError] = useCaveat({Caveat_400Regular})
  const [RobotoLoaded, RobotoError] = useRoboto({Roboto_400Regular})

  if(!caveatLoaded && !caveatError){
      return null
  }

  if(!RobotoLoaded && !RobotoError){
      return null
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.main}>
      <Header useCaveat={useCaveat}/>
      <HeaderMain useRoboto={useRoboto} useCaveat={useCaveat} />
      <View style={styles.addAndFitlersTask}> 
      <Form useRoboto={useRoboto} useCaveat={useCaveat} />
      <FilterButtonList useRoboto={useRoboto} useCaveat={useCaveat} /> 
      </View>
      <TasksContainer useRoboto={useRoboto} useCaveat={useCaveat} />
      </ScrollView>
      <StatusBar style="auto" />
      <Footer useCaveat={useCaveat}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'start',
    marginTop: 30,
    width: 360,  
  },
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

});
