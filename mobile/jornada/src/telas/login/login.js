import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Estilos from './estilo'

import {signIn} from '../../serviços/auth'


const Login = () => {

  async function handleSignIn (){
    const response = await signIn()
    console.log(response)
  }

  return (
    <View style={Estilos.container}>
      <Button style={Estilos.botaoEntrar} title = 'Entrar' onPress={handleSignIn}/>
      
    </View>
  );
  }
export default Login  
