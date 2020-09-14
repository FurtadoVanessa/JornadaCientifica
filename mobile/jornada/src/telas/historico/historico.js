import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {Back} from '../../components/Back';
import Estilos from './estilo';

function Historico({navigation}) {
  return (
    <View style={Estilos.container}>
      <Back onPress={() => navigation.goBack()} />
      <Text>Historico</Text>
    </View>
  );
}
export default Historico;
