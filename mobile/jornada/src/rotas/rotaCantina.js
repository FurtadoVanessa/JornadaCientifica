import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuParticipante from '../telas/menus/menuParticipante';

import LerAlmoço from '../telas/lerAlmoço/lerAlmoço';
import HistoricoCantina from '../telas/historicoCantina/historicoCantina';

const Stack = createStackNavigator();

function RotaCantina() {
  return (
    <Stack.Navigator initialRouteName={MenuParticipante}>
      <Stack.Screen name="Ler Almoço" component={LerAlmoço} />
      <Stack.Screen name="Histórico" component={HistoricoCantina} />
    </Stack.Navigator>
  );
}

export default RotaCantina;
