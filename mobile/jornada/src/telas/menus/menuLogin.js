import * as React from 'react';
import {View, Text, Image} from 'react-native';
import Estilos from './estilo';
import {ButtonContainer, ButtonText} from '../../components/Button';

function MenuLogin({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <View>
        <ButtonContainer onPress={() => navigation.navigate('Login')}>
          <ButtonText>Login</ButtonText>
        </ButtonContainer>
        <ButtonContainer onPress={() => navigation.navigate('Cadastro')}>
          <ButtonText>Cadastro</ButtonText>
        </ButtonContainer>
      </View>
    </View>
  );
}
export default MenuLogin;
