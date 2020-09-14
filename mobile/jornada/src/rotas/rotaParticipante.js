import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuParticipante from '../telas/menus/menuParticipante';

import Agenda from '../telas/agenda/agenda';
import CheckIn from '../telas/checkIn/checkIn';
import Historico from '../telas/historico/historico';
import Almoço from '../telas/almoço/almoço';
import Pitch from '../telas/pitch/pitch';
import detalhesEvento from '../telas/detalhesEvento/detalhesEvento';

const Stack = createStackNavigator();

function RotaParticipante() {
  return (
    <Stack.Navigator initialRouteName={MenuParticipante}>
      <Stack.Screen
        name="Menu Participante"
        component={MenuParticipante}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Agenda"
        component={Agenda}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CheckIn"
        component={CheckIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Histórico"
        component={Historico}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pitch"
        component={Pitch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalhes do Evento"
        component={detalhesEvento}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RotaParticipante;
