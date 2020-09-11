import * as React from 'react';
import {View, Image} from 'react-native';
import Estilos from './estilo';
import {StyledButton} from '../../components/Button';

function MenuLogin({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <StyledButton
        text="Entrar"
        onPress={() => navigation.navigate('Login')}
      />
      <StyledButton
        text="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}
export default MenuLogin;
