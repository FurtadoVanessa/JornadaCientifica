import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MenuParticipante from '../telas/menus/menuParticipante'

const Stack = createStackNavigator()

function RotaCantina() {
  return (
    
      <Stack.Navigator initialRouteName={MenuParticipante}>
        <Stack.Screen name="Ler Almoço" component={LerAlmoço} />
        <Stack.Screen name="Histórico" component={Historico} />
      </Stack.Navigator>
    
  )
}

export default RotaCantina