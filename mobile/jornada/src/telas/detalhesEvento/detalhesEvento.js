import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {ButtonContainer, ButtonText} from '../../components/Button';
import {InputStyled} from '../../components/Form';
import Estilos from './estilo';

function detalhesEvento({route}) {
  const {nomeEvento} = route.params;
  const {nomeResposaveis} = route.params;
  console.log(nomeResposaveis);
  const {sinopse} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
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
          <Text style={Estilos.heads}>Insira a chave para fazer check-in </Text>
          <InputStyled />
          <ButtonContainer>
            <ButtonText>Check-In</ButtonText>
          </ButtonContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default detalhesEvento;
