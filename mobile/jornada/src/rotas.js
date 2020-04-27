import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Agenda from './telas/agenda/agenda'
import MenuParticipante from './telas/menus/menuParticipante'

const Stack = createStackNavigator()
var tipoMenu = 'Menu Participante'

function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={tipoMenu}>
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="Menu Participante" component={MenuParticipante} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Rotas