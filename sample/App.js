
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './screens/RootStackScreen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const HomeScreen = () => {
  return(
    <View style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
    <Text>Home Screen</Text>
  </View>
  )
  
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
       <RootStackScreen/>
    </NavigationContainer>
  )
};



export default App;
