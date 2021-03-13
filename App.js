import 'react-native-gesture-handler';

import React from 'react';
import { Image } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Details } from './screens'
import { leftArrow } from "./assets/images";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                    headerBackTitleVisible: false,
                    headerBackImage: () =>
                        <Image source={ leftArrow }
                               style={{
                                   width: 28,
                                   height: 28,
                                   marginLeft: 12
                               }}
                        />,
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
            }}
        >
          <Stack.Screen name="Trombinoscope" component={ Home } />
          <Stack.Screen name="Détails" component={ Details } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
