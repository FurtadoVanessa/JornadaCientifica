import * as React from 'react';
import { Button, View, Text } from 'react-native';
import Estilos from './estilo'

function MenuCantina() {
    return (
        <View style = {Estilos.container}>
        <Image source={require('../../imagens/logo-jornada.png')} style = {Estilos.logo}></Image>
        <Button
            title="Ler Almoço"
            onPress={() => navigation.navigate('LerAlmoço')}
        />
        <Button
            title="Histórico"
            onPress={() => navigation.navigate('Histórico')}
        />
        </View>
    );
  }
export default MenuCantina  