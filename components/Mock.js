import { StyleSheet, View, Image, Text, Animated, Easing } from 'react-native'

import { useRef, useEffect, useState } from 'react';

export default function Mock () {

//     // opacity container
//     const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

//     useEffect(() => {
//       Animated.timing(fadeAnim, {
//         toValue: 1,
//         duration: 2000,
//         useNativeDriver: true,
//       }).start();
//     }, [fadeAnim]);

//     // rotate image
//     const rotateValue = new Animated.Value(0)

//     const spin = () => { // funzione per creare il loop
//         rotateValue.setValue(0)   
//         Animated.timing(rotateValue, {// configurazione rotateValue: change Value(0)
//             toValue: 1,
//             duration: 2000,
//             easing: Easing.linear, // type of animation
//             useNativeDriver: true,
//         }).start(() => spin())
//     }
//     useEffect(() => { 
//         spin() 
//     },[])

//     const rotateAnim = rotateValue.interpolate({ // configurazione
//         inputRange: [0, 1,],
//         outputRange: ['0deg', '360deg']
//     })

 
//     return (
//             <Animated.View style={{opacity: fadeAnim}}>
//         <View style={[{width: '100%', height: '100%'}, styles.loadingContainer]}>

//             <Animated.Image style={{
//                 width: 150,
//                 height: 100, 
//                 transform: [{rotate: rotateAnim}]}}
//                 source={require('../assets/img/logo.png')}/>

//              <Text style={styles.loadingText}>© Serena Gaia Scicolone </Text>
//         </View>
//             </Animated.View>
//     )
// }

// const styles = StyleSheet.create({
//     loadingContainer: {
//         backgroundColor: '#A64444',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     image: {
//         width: 150,
//         height: 100, 
//         transform: [{rotate: '360deg'}]
//     },
//     loadingText: {
//         // marginTop: 'auto',
//         position: 'absolute',
//         bottom: 0,
//         padding: 16,
    }
    
