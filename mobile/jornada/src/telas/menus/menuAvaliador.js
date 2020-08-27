import * as React from 'react';
import {Button, View, Text} from 'react-native';
import Estilos from './estilo';

function MenuAvaliador({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <Button title="Avaliar" onPress={() => navigation.navigate('Avaliar')} />
      <Button
        title="Histórico"
        onPress={() => navigation.navigate('Histórico')}
      />
      <Button
        title="Participante"
        onPress={() => navigation.navigate('Participante')}
      />
    </View>
  );
}
export default MenuAvaliador;
