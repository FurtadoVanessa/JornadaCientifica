import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, VirtualizedList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

const DATA = [];

const getItem = (data, index) => {
    return {
        id: Math.random().toString(12).substring(0),
        title: `Item ${index + 1}`
    }
}

const getItemCount = (data) => {
    return 5;
}

const Item = ({ title }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text>Modificar texto aqui</Text>
        </View>
    );
}

const VirtualizedListExample = () => {
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data={DATA}
                initialNumToRender={5}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    );
}

export default function SelecionarAvaliacao({ route }) {
    const { tipo } = route.params;
    const json = JSON.stringify(tipo);

    if(json == 1){
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Avaliações de Pôsteres</Text>
                <Text style={{ color: 'gray' }}>Selecione uma avaliação que deseja avaliar</Text>
    
                <VirtualizedListExample></VirtualizedListExample>
    
            </View>
        );
    }else if(json == 2){
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Avaliações de Pitches</Text>
                <Text style={{ color: 'gray' }}>Selecione uma avaliação que deseja avaliar</Text>
    
                <VirtualizedListExample></VirtualizedListExample>
    
            </View>
        );
    }else{
        return (
            <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Avaliações Orais</Text>
                <Text style={{ color: 'gray' }}>Selecione uma avaliação que deseja avaliar</Text>
    
                <VirtualizedListExample></VirtualizedListExample>
    
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        marginTop: Constants.statusBarHeight,
    },
    item: {
        backgroundColor: '#ffffff',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        borderWidth: 2,

    },
    title: {
        fontSize: 32,
    },
});


