import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import Estilos from './estilo'

function MenuLogin({navigation}) {
    return (
        <View style = {Estilos.container}>
        <Image source={require('../../imagens/logo-jornada.png')} style = {Estilos.logo}></Image>
        <Button
            title="Login"
            onPress={() => navigation.navigate('Login')}
        />
        <Button
            title="Cadastro"
            onPress={() => navigation.navigate('Cadastro')}
        />
        </View>
    );
  }
export default MenuLogin