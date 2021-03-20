import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import Welcome2 from './src/screens/welcome2';
import Welcome3 from './src/screens/welcome3';
import Welcome4 from './src/screens/welcome4';
import Welcome5 from './src/screens/welcome5';
import Welcome6 from './src/screens/welcome6';
import Signin from './src/screens/signin';
import SignUp from './src/screens/createacc';




const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Welcome2" 
        component={Welcome2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Welcome3" 
        component={Welcome3} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Welcome4" 
        component={Welcome4} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Welcome5" 
        component={Welcome5} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Welcome6" 
        component={Welcome6} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Signin" 
        component={Signin} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Signup" 
        component={SignUp} 
        options={{ headerShown: false}} 
      />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}