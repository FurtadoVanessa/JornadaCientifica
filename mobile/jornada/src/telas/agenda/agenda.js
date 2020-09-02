import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Estilos from './estilo';
import Evento from './evento';

function Agenda() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={Estilos.container}>
          <TouchableOpacity
            style={Estilos.container}
            onPress={() => Alert.alert('Ir para Evento passando o evento')}>
            <Evento
              title="Palestra01"
              hour="09:00 as 11:00"
              location="Auditório"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={Estilos.container}
            onPress={() => Alert.alert('Ir para Evento passando o evento')}>
            <Evento
              title="Palestra01"
              hour="09:00 as 11:00"
              location="Auditório"
            />
            <TouchableOpacity
              style={Estilos.container}
              onPress={() => Alert.alert('Ir para Evento passando o evento')}
            />
            <Evento
              title="Palestra01"
              hour="09:00 as 11:00"
              location="Auditório"
            />
            <TouchableOpacity
              style={Estilos.container}
              onPress={() => Alert.alert('Ir para Evento passando o evento')}
            />
            <Evento
              title="Palestra01"
              hour="09:00 as 11:00"
              location="Auditório"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Agenda;
