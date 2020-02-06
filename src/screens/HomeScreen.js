import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';

import Logo from '../../assets/images/app_logo.png';


class HomeScreen extends Component {
    state = {
        fontsLoaded: false
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Rubik-bold': require('../../assets/fonts/Rubik-Bold.ttf'),
            'Rubik-light': require('../../assets/fonts/Rubik-Light.ttf'),
            'Rubik': require('../../assets/fonts/Rubik-Regular.ttf')
        });
        this.setState({ fontsLoaded: true })
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                < ScrollView >
                    <View style={styles.bodyWrap}>

                        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                        <View style={styles.hero}>
                            <Text style={styles.heroText}>Welcome to GET FIT fitness app </Text>
                            <Text style={styles.heroSmall}>The best fitness app for your next health and fitness goals!</Text>
                        </View>
                        <ImageBackground source={require('../../assets/images/hero_bg.jpg')} style={styles.heroImg}>
                            <Text style={styles.Card}></Text>
                        </ImageBackground>
                        <TouchableOpacity style={styles.brandBtn} onPress={() => this.props.navigation.navigate('NotifySetting')} >
                            <Text style={styles.whiteBtnText}>Get Started</Text>
                        </TouchableOpacity>
                        <Text style={styles.heroSmall, styles.size4}>Already have an Account?
                            <Text style={styles.signInText}>Sign In</Text>
                        </Text>
                    </View>
                </ScrollView >

            )
        } else {
            return <ActivityIndicator size="large" />
        }
    }
}

/* 
* $BLUE = #6055CD
* $GREY = #9C9EB9
* $PURPLE = #8B63E6 & #7265E3
* $WHITE_SHADE = #E0DDF5
*/

const styles = StyleSheet.create({
    bodyWrap: {
        backgroundColor: '#fff',
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
        fontSize: 32,
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
        resizeMode: 'contain'
    },
    Card: {
        background: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10
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

export default HomeScreen;