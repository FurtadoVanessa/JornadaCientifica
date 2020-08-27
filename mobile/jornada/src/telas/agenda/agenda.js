import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';
import Estilos from './estilo';
import Evento from './evento';

function Agenda() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={Estilos.container}>
          <Evento
            title="Palestra01"
            hour="09:00 as 11:00"
            location="Auditório"></Evento>
          <Evento
            title="Palestra01"
            hour="09:00 as 11:00"
            location="Auditório"></Evento>
          <Evento
            title="Palestra01"
            hour="09:00 as 11:00"
            location="Auditório"></Evento>
          <Evento
            title="Palestra01"
            hour="09:00 as 11:00"
            location="Auditório"></Evento>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Agenda;
