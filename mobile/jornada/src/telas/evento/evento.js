import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import NomeEvento from './componentes/nome';
import Responsaveis from './componentes/resp';
import Sinopse from './componentes/sinopse';
import Estilos from './estilo';

export default function Evento() {
  return (
    <View style={Estilos.container}>
      <View style={Estilos.spacev} />
      <View style={Estilos.header}>
        <View style={Estilos.spaceh} />
        <View style={Estilos.btn}>
          <TouchableOpacity
            style={Estilos.voltar}
            onPress={() => Alert.alert('Voltar')}>
            <Text style={{color: 'white'}}>VOLTAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Estilos.body}>
        <Text style={Estilos.text}>Nome do Evento</Text>
        <NomeEvento />

        <Text style={Estilos.text}>Responsáveis pelo Evento</Text>
        <Responsaveis />

        <Text style={Estilos.text}>Sinopse</Text>
        <Sinopse />
      </View>
    </View>
  );
}
