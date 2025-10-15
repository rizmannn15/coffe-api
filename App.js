import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Detail from './components/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#6F4E37' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', fontSize: 20 },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'Coffee Shop' }}
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail}
          options={{ title: 'Detail Coffee' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
