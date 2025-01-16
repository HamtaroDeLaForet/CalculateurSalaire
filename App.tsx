import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AddMissionScreen from './src/screens/AddMissionScreen';
import ViewSalaryScreen from './src/screens/ViewSalaryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddMission" component={AddMissionScreen} />
        <Stack.Screen name="ViewSalary" component={ViewSalaryScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
