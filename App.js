import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import Mock from './components/Mock'

import TodoListApp from './components/TodoListApp';

export default function App() {
 
  let persistore = persistStore(store)
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor ={persistore}>
    <View style={styles.container}>
      <TodoListApp />
      {/* <Mock /> */}
      <StatusBar 
      // backgroundColor='green'
    
      networkActivityIndicatorVisible = {true}
      style='auto' />
    </View>
    </PersistGate> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'start',
    marginTop: 30,
    // alignSelf: 'stretch'
  },
  image: {
    width: 150,
    height: 100, 
    // alignSelf: 'center'   
}
});
