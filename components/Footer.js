import { StyleSheet, Text, View, Image} from "react-native"


export default function Footer ({useCaveat}) {
    return (
        <View style={styles.footerContainer}>
            <View>
                 <Image source={require('../assets/img/logo.png')} style={styles.image}/>
            </View>
            <View>
                <Text style={{fontFamily: 'Caveat_400Regular', fontSize: 16, paddingRight: 10}}>© Serena Gaia Scicolone </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(141, 187, 200)',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    image: {
        width: 100,
        height: 50
    }
})