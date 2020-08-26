import React, {useContext} from 'react';
import {View, Text} from 'react-native';
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
      <TextInputStyled />
      <TextInputStyled secureTextEntry />
      <ButtonContainer onPress={handleSignIn}>
        <ButtonText>Entrar</ButtonText>
      </ButtonContainer>
    </View>
  );
};
export default Login;
