import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import {UserContext } from "./Context";
import WelcomePage from './screens/WelcomePage';
import PregnantSurvey1 from './screens/PregnantSurvey1';
import PregnantSurvey2 from './screens/PregnantSurvey2';
import PregnantSurvey3 from './screens/PregnantSurvey3';
import AppointmentScreen from './screens/AppointmentScreen';
import Dashboard from './screens/Dashboard';

import UserDash from './screens/UserDash';
import WeightGainBP from './screens/WeightGainBP';

import FetalScreen from './screens/FetalScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <UserContext.Provider value={"hello"}>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Welcome" component={WelcomePage}/>
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey1" component={PregnantSurvey1}/>
        <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey2" component={PregnantSurvey2}/>
        <Stack.Screen options={{ headerShown: false }} name="Pregnant Survey3" component={PregnantSurvey3}/>
        <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={UserDash} />
        <Stack.Screen name="Summary" component={WeightGainBP}/>
        <Stack.Screen options={{ headerShown: false }} name="Fetal Screen" component={FetalScreen}/>
        <Stack.Screen name="Appointment" component={AppointmentScreen}/>


        
      </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});