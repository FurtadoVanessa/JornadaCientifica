import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {Back} from '../../components/Back';
import Estilos from './estilo';

function CheckIn() {
  return (
    <View style={Estilos.container}>
      <Back />
      <Text>CheckIn</Text>
    </View>
  );
}
export default CheckIn;
