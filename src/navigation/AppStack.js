import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Detail from '../screens/detail/Detail';
import React from 'react';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

function AppStack() {
  const namePokemon = useSelector(state=>state.action.pokemon.name)
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerTitle:'Pokemon App - Rival alfalah'}}/>
      <Stack.Screen name="Detail" component={Detail} options={{headerTitle: namePokemon}}/>
    </Stack.Navigator>
  );
}

export default AppStack;
