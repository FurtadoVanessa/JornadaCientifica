import React, {useContext} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Estilos from './estilo';
import Icon from 'react-native-vector-icons/Entypo';

import {ButtonContainer, ButtonText} from '../../components/Button';

import AuthContexto from '../../contexto/contextoAuth';

function MenuParticipante({navigation}) {
  const {signed, user, signOut} = useContext(AuthContexto);

  function handleSignout() {
    signOut();
  }
  return (
    <View style={Estilos.container}>
      <TouchableOpacity onPress={() => handleSignout()} style={Estilos.logout}>
        <Icon name="log-out" size={26} color="#E00" />
      </TouchableOpacity>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <ButtonContainer onPress={() => navigation.navigate('Agenda')}>
        <ButtonText>Agenda</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate('CheckIn')}>
        <ButtonText>Check-in</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate('Histórico')}>
        <ButtonText>Histórico</ButtonText>
      </ButtonContainer>
      <ButtonContainer onPress={() => navigation.navigate('Pitch')}>
        <ButtonText>Pitch</ButtonText>
      </ButtonContainer>
    </View>
  );
}
export default MenuParticipante;
