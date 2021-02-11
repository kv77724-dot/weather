import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './src/screens/index';
import weather from './src/api/weatherApi';

// const [results, setResults] = useState('');
// const [errorMessage, setErrorMessage] = useState('');
console.log('Inside App.js');
console.log(weather);
var data = '';
const searchApi = async (searchTerm) => {
  try {
    const response = await weather.get(searchTerm, {
      params: {
        apikey: 'fest63ZOnrG8B8l9KQ5IwmBtSoStIy5w',
        metric: true,
      },
    });
    data = response;
    // console.log('results', response);
    // setResults(response);
  } catch (err) {
    console.log('Something went wrong');
  }
};

searchApi('/204842');
console.log('results', data);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
