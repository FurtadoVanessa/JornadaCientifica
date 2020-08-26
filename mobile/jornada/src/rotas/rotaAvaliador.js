import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Avaliar from '../telas/avaliar/avaliar';
import MenuAvaliador from '../telas/menus/menuAvaliador';
import HistoricoAvaliador from '../telas/historicoAvaliador/historicoAvaliador';
import Participante from '../telas/participante/participante';
import Almoço from '../telas/almoço/almoço';

const Stack = createStackNavigator();

function RotaAvaliador() {
  return (
    <Stack.Navigator initialRouteName={MenuAvaliador}>
      <Stack.Screen name="Menu Avaliador" component={MenuAvaliador} />
      <Stack.Screen name="Avaliar" component={Avaliar} />
      <Stack.Screen name="Histórico" component={HistoricoAvaliador} />
      <Stack.Screen name="Participante" component={Participante} />
      <Stack.Screen name="Almoço" component={Almoço} />
    </Stack.Navigator>
  );
}

export default RotaAvaliador;
