import React, {useContext} from 'react';
import {SafeAreaView, Image, ScrollView, TouchableOpacity} from 'react-native';
import Estilos from './estilo';
import Icon from 'react-native-vector-icons/Entypo';

import {StyledButton} from '../../components/Button';

import AuthContexto from '../../contexto/contextoAuth';

function MenuAvaliador({navigation}) {
  const {signed, user, signOut} = useContext(AuthContexto);

  function handleSignout() {
    signOut();
  }

  return (
    <ScrollView>
      <SafeAreaView style={Estilos.container}>
        <TouchableOpacity
          onPress={() => handleSignout()}
          style={Estilos.logout}>
          <Icon name="log-out" size={26} color="#E00" />
        </TouchableOpacity>
        <Image
          resizeMode={'contain'}
          source={require('../../imagens/logo-jornada.png')}
          style={Estilos.logo}
        />
        <StyledButton
          text="Avaliar"
          onPress={() => navigation.navigate('Avaliar')}
        />
        <StyledButton
          text="Histórico"
          onPress={() => navigation.navigate('Histórico')}
        />
        <StyledButton
          text="Participante"
          onPress={() => navigation.navigate('Participante')}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
export default MenuAvaliador;
