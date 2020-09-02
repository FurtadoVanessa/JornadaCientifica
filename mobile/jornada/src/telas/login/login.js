import React, {useContext, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';

import Estilos from './estilo';
import {TextInputStyled} from '../../components/Form';
import {ButtonContainer, ButtonText} from '../../components/Button';

import AuthContexto from '../../contexto/contextoAuth';

const Login = ({navigation}) => {
  const {signed, user, signIn} = useContext(AuthContexto);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(signed);
  // console.log(user);

  async function handleSignIn() {
    signIn(email, password);
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
          <TextInputStyled onChangeText={mail => setEmail(mail)} />
          <Text style={Estilos.texto}>Senha</Text>
          <TextInputStyled
            secureTextEntry
            onSubmitEditing={handleSignIn}
            onChangeText={senha => setPassword(senha)}
          />
          <ButtonContainer onPress={handleSignIn}>
            <ButtonText>Entrar</ButtonText>
          </ButtonContainer>
          <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
            <Text style={Estilos.esqueceuSenha}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Login;
