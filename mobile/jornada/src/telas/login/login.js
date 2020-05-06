import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import Estilos from './estilo'

import AuthContexto from '../../contexto/contextoAuth'

const Login = () => {

  const { signed, user, signIn } = useContext(AuthContexto)

  console.log(signed)
  console.log(user)

  function handleSignIn (){
    signIn();
  }

  return (
    <View style={Estilos.container}>
      <Button style={Estilos.botaoEntrar} title = 'Entrar' onPress={handleSignIn}/>
    </View>
  );
  }
export default Login  
