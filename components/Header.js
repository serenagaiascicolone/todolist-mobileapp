import { Image, ImageBackground, Text, View} from "react-native"
import { StyleSheet } from "react-native"
import {LinearGradient} from "expo-linear-gradient"


export default function Header ({useCaveat}) {
    return (
        <View style={styles.header}>
        <ImageBackground 
        style={styles.backgroundImage}
        source={require('../assets/img/pexels-cottonbro-studio-5190680.jpg')} 
        resizeMode={'cover'}>

            <LinearGradient 
                style={styles.gradientLinear}
                colors={[
                    'rgba(191, 140, 111, 0.7)',
                    'rgba(191, 140, 111, 0.7)'
                ]}>
            <Image source={require('../assets/img/logo.png')} style={styles.image}/>
            {/* <Text style={{fontFamily : 'Caveat_400Regular', fontSize: 40}}> Todo List </Text> */}
        </LinearGradient>
    </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create ({
    // header
    header: {
        width: '100%',
        // backgroundColor: 'red',
        height: 160,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 1,
        
    },
    backgroundImage: {
        backgroundColor: '#00000060',
        width: '100%',
        height: '100%',
    },
    gradientLinear: {
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 100, 
        alignSelf: 'center'
        
    }
})
