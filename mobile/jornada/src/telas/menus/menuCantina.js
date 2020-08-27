import * as React from 'react';
import {Button, View, Image} from 'react-native';
import Estilos from './estilo';

function MenuCantina({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <Button title="Almoço" onPress={() => navigation.navigate('LerAlmoço')} />
      <Button
        title="Histórico"
        onPress={() => navigation.navigate('HistoricoCantina')}
      />
    </View>
  );
}
export default MenuCantina;
