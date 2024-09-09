import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register'; 

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name = "HomeScreen"
          component={ HomeScreen }
          options = {{
            title: 'Inicio',
            headerShown: false
          }}
        />
        <Stack.Screen
          name = "RegisterScreen"
          component={ RegisterScreen }
          options = {{
            headerShown: true,
            title: 'Nuevo Usario',
            headerTransparent: true,
            headerTintColor: '#FFF',
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;