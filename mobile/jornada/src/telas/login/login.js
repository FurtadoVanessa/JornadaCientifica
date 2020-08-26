import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Estilos from './estilo';
import {TextInputStyled} from '../../components/Form';
import {ButtonContainer, ButtonText} from '../../components/Button';
import AuthContexto from '../../contexto/contextoAuth';

const Login = () => {
  const {signed, user, signIn} = useContext(AuthContexto);

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <View style={Estilos.formulario}>
        <Text style={Estilos.texto}>E-mail</Text>
        <TextInputStyled />
        <Text style={Estilos.texto}>Senha</Text>
        <TextInputStyled secureTextEntry />
        <ButtonContainer onPress={handleSignIn}>
          <ButtonText>Entrar</ButtonText>
        </ButtonContainer>
        <TouchableOpacity>
          <Text style={Estilos.esqueceuSenha}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Login;
