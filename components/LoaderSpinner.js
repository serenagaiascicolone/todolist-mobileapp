import { StyleSheet, View, Image, Text, Animated, Easing } from 'react-native'

import { useEffect} from 'react';

export default function LoaderSpinner ({useRoboto}) {

    // opacity container

    const fadeAnim = new Animated.Value(0)// Initial value for opacity: 0
    
    useEffect(() => { 
        Animated.timing(fadeAnim, {// configurazione rotateValue: change Value(0)
            toValue: 1,
            duration: 1000,
            easing: Easing.linear, // type of animation
            useNativeDriver: true,
        }).start()
    },[fadeAnim])
    
    // animated image
    const widhtImageValue = new Animated.Value(0)
    Animated.timing(widhtImageValue, {
        toValue: 150, 
        duration: 3000, 
        useNativeDriver: false,
    }).start()
    


    return (
            <Animated.View style={{opacity: fadeAnim}}>
        <View style={[{width: '100%', height: '100%'}, styles.loadingContainer]}>

            <Animated.Image style={{
                height: 100,          
                width: widhtImageValue,     
            }}
                source={require('../assets/img/logo.png')}/>

             <Text style={styles.loadingText}>© Serena Gaia Scicolone </Text>
        </View>
            </Animated.View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor: '#A64444',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 100, 
        transform: [{rotate: '360deg'}]
    },
    loadingText: {
        // marginTop: 'auto',
        position: 'absolute',
        bottom: 0,
        padding: 16,
        fontFamily: 'Roboto_400Regular',
    }
    
})