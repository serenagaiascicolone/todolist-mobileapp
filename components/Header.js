import { ImageBackground, Text, View} from "react-native"
import { StyleSheet } from "react-native"
import {LinearGradient} from "expo-linear-gradient"


export default function Header ({useCaveat}) {
    return (
        <ImageBackground 
        style={styles.backgroundImage}
        source={require('../assets/img/pexels-cottonbro-studio-5190680.jpg')} 
        resizeMode={'cover'}>

            <LinearGradient 
                colors={[
                    'rgba(191, 140, 111, 0.7)',
                    'rgba(191, 140, 111, 0.7)'
                ]}>
        <View style={styles.header}>
            <Text style={{fontFamily : 'Caveat_400Regular', fontSize: 40}}> Todo List </Text>
        </View>

        </LinearGradient>
    </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    // header
    header: {
        width: '100%',
        // backgroundColor: 'red',
        height: 120,
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center', 
        gap: 1,
        
    },
    backgroundImage: {
        backgroundColor: '#00000060',
    },
})
