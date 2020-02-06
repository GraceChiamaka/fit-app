import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';


const NotificationScreen = () => {
    return (
        <View style={styles.bodyWrap}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            <View style={styles.hero}>
                <Text style={styles.heroText}>Do you want to turn on Notifications </Text>
            </View>
            <ImageBackground source={require('../../assets/images/phone_bg.png')} style={styles.heroImg}>
            </ImageBackground>
            <TouchableOpacity style={styles.brandBtn} onPress={() => this.props.navigation.navigate('NotifySetting')} >
                <Text style={styles.whiteBtnText}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.heroSmall, styles.size4}>Already have an Account?
                            <Text style={styles.signInText}>Sign In</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bodyWrap: {
        backgroundColor: 'white',
        fontFamily: 'Rubik',
        height: '100%'
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 20,
        alignSelf: 'center',
    },
    hero: {
        marginTop: 15,
        padding: 20,
        flexDirection: 'column',
        textAlign: 'center'
    },
    heroText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Rubik-bold'
    },
    heroSmall: {
        fontSize: 18,
        textAlign: 'center',
        color: '#9c9eb9',
        marginTop: 10,
        fontFamily: 'Rubik-light'
    },
    heroImg: {
        width: '100%',
        height: 200,
        marginTop: 20,
        resizeMode: 'stretch'
    },
    brandBtn: {
        marginTop: 30,
        width: '80%',
        borderRadius: 25,
        backgroundColor: '#8B63E6',
        alignItems: 'center',
        color: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        alignSelf: 'center'
    },
    whiteBtnText: {
        color: "white"
    },
    signInText: {
        fontSize: 14,
        color: '#8B63E6'
    },
    size4: {
        fontSize: 14,
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 20
    }

})

export default NotificationScreen;
