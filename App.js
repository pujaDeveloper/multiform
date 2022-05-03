import * as React from 'react';
import { View, Text, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Message } from './src/utils/message';
import { Home } from './src/layouts/Home';


console.disableYellowBox = true;
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Message.screen_home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;