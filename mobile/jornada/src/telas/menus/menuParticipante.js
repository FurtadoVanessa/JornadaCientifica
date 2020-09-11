import React, {useContext} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Estilos from './estilo';
import Icon from 'react-native-vector-icons/Entypo';

import {StyledButton} from '../../components/Button';

import AuthContexto from '../../contexto/contextoAuth';

function MenuParticipante({navigation}) {
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
          text="Agenda"
          onPress={() => navigation.navigate('Agenda')}
        />
        <StyledButton
          text="Histórico"
          onPress={() => navigation.navigate('Histórico')}
        />
        <StyledButton
          text="Pitch"
          onPress={() => navigation.navigate('Pitch')}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
export default MenuParticipante;
