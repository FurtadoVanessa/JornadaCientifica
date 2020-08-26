import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Estilos from './estilo';

function MenuLogin({navigation}) {
  return (
    <View style={Estilos.container}>
      <Image
        source={require('../../imagens/logo-jornada.png')}
        style={Estilos.logo}
      />
      <View>
        <TouchableOpacity
          style={Estilos.botaoContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={Estilos.botaoText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Estilos.botaoContainer}
          onPress={() => navigation.navigate('Cadastro')}>
          <Text style={Estilos.botaoText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default MenuLogin;
