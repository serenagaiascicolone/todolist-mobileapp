import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';
import TodoListApp from './components/TodoListApp';
import LoaderSpinner from './components/LoaderSpinner';
import { Platform } from 'react-native';

export default function App() {
 
  let persistore = persistStore(store)
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor ={persistore}>
    <View style={styles.container}>
      <TodoListApp />
      {/* <LoaderSpinner /> */}
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
    ...Platform.select({
      ios : {
        marginTop: 32,
      },
      android: {
        marginTop: 30,
      }
    })
    // alignSelf: 'stretch'
  },
  image: {
    width: 150,
    height: 100, 
    // alignSelf: 'center'   
}
});
