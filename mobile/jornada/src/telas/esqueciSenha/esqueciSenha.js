import React, {useContext} from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

import Estilos from './estilo';
import {TextInputStyled} from '../../components/Form';
import {ButtonContainer, ButtonText} from '../../components/Button';

import AuthContexto from '../../contexto/contextoAuth';

const EsqueciSenha = ({navigation}) => {
  const {signed, user, passwordReset} = useContext(AuthContexto);

  console.log(signed);
  console.log(user);

  function handleLostPassword() {
    //passwordReset(email);
  }

  return (
    <ScrollView>
      <View style={Estilos.container}>
        <Image
          resizeMode={'contain'}
          source={require('../../imagens/logo-jornada.png')}
          style={Estilos.logo}
        />
        <View style={Estilos.formulario}>
          <Text style={Estilos.texto}>E-mail</Text>
          <TextInput style={Estilos.entradaTexto} />
          <ButtonContainer onPress={handleLostPassword}>
            <ButtonText>Recuperar senha</ButtonText>
          </ButtonContainer>
        </View>
      </View>
    </ScrollView>
  );
};
export default EsqueciSenha;
