import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import NotificationScreen from './src/screens/NotificationScreen';


const navigator = createStackNavigator({
  Home: HomeScreen,
  NotifySetting: NotificationScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions: {
    title: "Fit App"
  }
})

export default createAppContainer(navigator)