import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Agenda from '../telas/agenda/agenda'
import MenuParticipante from '../telas/menus/menuParticipante'

const Stack = createStackNavigator()

function RotaParticipante() {
  return (
      <Stack.Navigator initialRouteName={MenuParticipante}>
        <Stack.Screen name="Menu Participante" component={MenuParticipante} />
        <Stack.Screen name="Agenda" component={Agenda} />
        <Stack.Screen name="CheckIn" component={CheckIN} />
        <Stack.Screen name="Histórico" component={Historico} />
        <Stack.Screen name="Almoço" component={Almoço} />
      </Stack.Navigator>
  )
}

export default RotaParticipante