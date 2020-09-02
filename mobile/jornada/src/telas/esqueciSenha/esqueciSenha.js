import React, {useContext} from 'react';
import {View, ScrollView, Text, TextInput, Image} from 'react-native';

import {useState} from 'react';
import {ButtonContainer, ButtonText} from '../../components/Button';
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
        <View style={Estilos.formulario}>
          <Text style={Estilos.texto}>E-mail</Text>
          <TextInput
            style={Estilos.entradaTexto}
            onChangeText={mail => setEmail(mail)}
          />
          <ButtonContainer onPress={handleLostPassword}>
            <ButtonText>Recuperar senha</ButtonText>
          </ButtonContainer>
        </View>
      </View>
    </ScrollView>
  );
};
export default EsqueciSenha;
