import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {StyledButton} from '../../components/Button';
import {InputStyled} from '../../components/Form';
import {Back} from '../../components/Back';

import Estilos from './estilo';

function detalhesEvento({route, navigation}) {
  const {nomeEvento} = route.params;
  const {nomeResposaveis} = route.params;
  const {sinopse} = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        <Back onPress={() => navigation.goBack()} />
        <View style={Estilos.container}>
          <View style={Estilos.card}>
            <View style={Estilos.event}>
              <Text style={Estilos.heads}>Título</Text>
              <Text style={Estilos.simpleText}>{nomeEvento}</Text>
              <Text style={Estilos.heads}>Responsáveis</Text>
              <Text style={Estilos.simpleText}>{nomeResposaveis}</Text>
              <Text style={Estilos.heads}>Sinopse </Text>
              <Text style={Estilos.simpleText}>{sinopse}</Text>
            </View>
          </View>
          <InputStyled text={'Insira a chave para fazer check-in '} />
          <StyledButton text={'Check-In'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default detalhesEvento;
