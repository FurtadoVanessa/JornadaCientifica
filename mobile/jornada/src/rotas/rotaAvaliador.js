import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Avaliar from '../telas/agenda/agenda'
import MenuAvaliador from '../telas/menus/menuAvaliador'

const Stack = createStackNavigator()

function RotaAvaliador() {
  return (
      <Stack.Navigator initialRouteName={MenuAvaliador}>
        <Stack.Screen name="Menu Avaliador" component={MenuAvaliador} />
        <Stack.Screen name="Avaliar" component={Avaliar} />
        <Stack.Screen name="Histórico" component={Historico} />
        <Stack.Screen name="Participante" component={Participante} />
        <Stack.Screen name="Almoço" component={Almoço} />
      </Stack.Navigator>
  )
}

export default RotaAvaliador