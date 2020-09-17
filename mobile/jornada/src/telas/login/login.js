import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Estilos from './estilo';
import {InputStyled} from '../../components/Form';
import {StyledButton} from '../../components/Button';
import {Back} from '../../components/Back';

import AuthContexto from '../../contexto/contextoAuth';

const Login = ({navigation}) => {
  const {signed, user, signIn} = useContext(AuthContexto);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn() {
    if (email === '' || password === '') {
      return;
    }
    signIn(email, password);
  }

  return (
    <ScrollView>
      <SafeAreaView style={Estilos.container}>
        <Back onPress={() => navigation.goBack()} />
        <Image
          resizeMode={'contain'}
          source={require('../../imagens/logo-jornada.png')}
          style={Estilos.logo}
        />
        <InputStyled text="E-mail" onChangeText={mail => setEmail(mail)} />
        <InputStyled
          text="Senha"
          secureTextEntry={true}
          onSubmitEditing={handleSignIn}
          onChangeText={senha => setPassword(senha)}
        />
        <StyledButton text="Entrar" onPress={handleSignIn} />
        <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={Estilos.esqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Login;
