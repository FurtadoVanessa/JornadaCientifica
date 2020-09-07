import * as React from 'react';
import {View, Image} from 'react-native';
import Estilos from './estilo';

import {StyledButton} from '../../components/Button';

function MenuAvaliador({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <StyledButton
        text="Avaliar"
        onPress={() => navigation.navigate('Avaliar')}
      />
      <StyledButton
        text="Histórico"
        onPress={() => navigation.navigate('Histórico')}
      />
      <StyledButton
        text="Participante"
        onPress={() => navigation.navigate('Participante')}
      />
    </View>
  );
}
export default MenuAvaliador;
