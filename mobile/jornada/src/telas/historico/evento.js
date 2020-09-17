import * as React from 'react';
import {Button, View, Text, ImagePropTypes} from 'react-native';
import Estilos from './estilo';

function Evento(props) {
  return (
    <View style={Estilos.card}>
      <View style={Estilos.event}>
        <Text style={Estilos.heads}>Título</Text>
        <Text style={Estilos.simpleText}>{props.title}</Text>
        <Text style={Estilos.heads}>Horário</Text>
        <Text style={Estilos.simpleText}>{props.hour}</Text>
        <Text style={Estilos.heads}>Local </Text>
        <Text style={Estilos.simpleText}>{props.location}</Text>
      </View>
    </View>
  );
}
export default Evento;
