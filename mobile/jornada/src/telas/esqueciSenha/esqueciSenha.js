import React, {useContext} from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

import {useState} from 'react';

import {StyledButton} from '../../components/Button';
import {InputStyled} from '../../components/Form';
import AuthContexto from '../../contexto/contextoAuth';

import Estilos from './estilo';

const EsqueciSenha = ({navigation}) => {
  const {resetPassword} = useContext(AuthContexto);
  const [email, setEmail] = useState('');

  // console.log(signed);
  // console.log(user);

  function handleLostPassword() {
    if (email === '') {
      return;
    }
    resetPassword(email);
  }

  return (
    <ScrollView>
      <View style={Estilos.container}>
        <Image
          resizeMode={'contain'}
          source={require('../../imagens/logo-jornada.png')}
          style={Estilos.logo}
        />
        <InputStyled
          text="E-mail"
          red={true}
          onChangeText={mail => setEmail(mail)}
        />
        <StyledButton text="Recuperar senha" onPress={handleLostPassword} />
      </View>
    </ScrollView>
  );
};
export default EsqueciSenha;
