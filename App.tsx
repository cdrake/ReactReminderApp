import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReminderScreen from './ReminderScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
