import React, {useContext} from 'react';
import {View, ScrollView, SafeAreaView, Image} from 'react-native';

import {useState} from 'react';

import {StyledButton} from '../../components/Button';
import {Back} from '../../components/Back';
import {InputStyled} from '../../components/Form';
import AuthContexto from '../../contexto/contextoAuth';

import Estilos from './estilo';

const EsqueciSenha = ({navigation}) => {
  const {resetPassword} = useContext(AuthContexto);
  const [email, setEmail] = useState('');

  function handleLostPassword() {
    if (email === '') {
      return;
    }
    resetPassword(email);
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={Estilos.container}>
          <Back onPress={() => navigation.goBack()} />
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
      </SafeAreaView>
    </ScrollView>
  );
};
export default EsqueciSenha;
