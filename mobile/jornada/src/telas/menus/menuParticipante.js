import React, {useContext} from 'react';
import {Button, View, Text, Image} from 'react-native';
import Estilos from './estilo';

import AuthContexto from '../../contexto/contextoAuth';

function MenuParticipante({navigation}) {
  const {signed, user, signOut} = useContext(AuthContexto);

  function handleSignout() {
    signOut();
  }
  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <Button title="Agenda" onPress={() => navigation.navigate('Agenda')} />
      <Button title="Check IN" onPress={() => navigation.navigate('CheckIn')} />
      <Button
        title="Histórico"
        onPress={() => navigation.navigate('Histórico')}
      />
      <Button title="Almoço" onPress={() => navigation.navigate('Almoço')} />
      <Button
        title="SignOut"
        onPress={() => {
          handleSignout();
        }}
      />
    </View>
  );
}
export default MenuParticipante;
