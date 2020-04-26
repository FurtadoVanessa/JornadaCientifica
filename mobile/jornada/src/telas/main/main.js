import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {estilos} from './estilo'

export default class Main extends Component {
    render(){
        return (
            <View style = {estilos.container}>
                <Image source={require('../../imagens/logo-jornada.png')} style = {estilos.logo}></Image>
                <Text>Página Main</Text>
            </View>
        )
    }
}