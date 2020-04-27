import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import Estilos from './estilo'

function MenuParticipante({navigation}) {
    return (
        <View style = {Estilos.container}>
        <Image source={require('../../imagens/logo-jornada.png')} style = {Estilos.logo}></Image>
        <Button
            title="Agenda"
            onPress={() => navigation.navigate('Agenda')}
        />
        <Button
            title="Check IN"
            onPress={() => navigation.navigate('CheckIN')}
        />
        <Button
            title="Histórico"
            onPress={() => navigation.navigate('Histórico')}
        />
        <Button
            title="Almoço"
            onPress={() => navigation.navigate('Almoço')}
        />
        </View>
    );
  }
export default MenuParticipante  