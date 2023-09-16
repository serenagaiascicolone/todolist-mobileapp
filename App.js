import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Mock from './components/Mock'



export default function App() {
  return (
    <View style={styles.container}>
      <Mock/>
      
      <StatusBar style="auto" />
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
    // justifyContent: '',
  
  },
});
