import * as React from 'react';
import {View, Image} from 'react-native';
import Estilos from './estilo';
import {ButtonContainer, ButtonText} from '../../components/Button';

function MenuLogin({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        resizeMode={'contain'}
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />

      <ButtonContainer onPress={() => navigation.navigate('Login')}>
        <ButtonText>Entrar</ButtonText>
      </ButtonContainer>

      <ButtonContainer onPress={() => navigation.navigate('Cadastro')}>
        <ButtonText>Cadastrar</ButtonText>
      </ButtonContainer>
    </View>
  );
}
export default MenuLogin;
