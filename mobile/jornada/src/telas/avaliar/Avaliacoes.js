import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Avaliacoes({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

            <View style={{ flex: .15, alignItems: 'center' }}>
                <Text style={{ fontSize: 40 }}>Avaliações</Text>
                <Text style={{ color: 'gray' }}>Selecione o tipo da avaliação abaixo</Text>
            </View>

            <View style={{ flex: .85, justifyContent: 'space-evenly', width: 250 }}>
                <Button
                    title="Pôsteres"
                    color="#2F9E41"
                    accessibilityLabel="Navegue para Pôsteres"
                    onPress={() =>
                        navigation.navigate('Selecionar Avaliação', { tipo: 1 })
                    }
                />
                <Button
                    title="Pitch"
                    color="#2F9E41"
                    accessibilityLabel="Navegue para Pitch"
                    onPress={() =>
                        navigation.navigate('Selecionar Avaliação', { tipo: 2 })
                    }
                />
                <Button
                    title="Oral"
                    color="#2F9E41"
                    accessibilityLabel="Navegue para Oral"
                    onPress={() =>
                        navigation.navigate('Selecionar Avaliação', { tipo: 3 })
                    }
                />
            </View>
        </View>
    );
}

