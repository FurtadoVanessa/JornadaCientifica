import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Estilos from './estilo';

function detalhesEvento({ route }) {
    const { nomeEvento } = route.params;
    const { nomeResposaveis } = route.params;
    const { sinopse } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={Estilos.container}>
                    <View style={Estilos.container}>
                        <Text style={Estilos.heads}>Nome do Teste</Text>
                        <Text style={Estilos.simpleText}>{JSON.stringify(nomeEvento)}</Text>
                    </View>
                    <View style={Estilos.container}>
                        <Text style={Estilos.heads}>Responsáveis pelo Evento</Text>
                        <Text style={Estilos.simpleText}>{JSON.stringify(nomeResposaveis)}</Text>
                    </View>
                    <View style={Estilos.container}>
                        <Text style={Estilos.heads}>Sinópse</Text>
                        <Text style={Estilos.sinopse}>{JSON.stringify(sinopse)}</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}

export default detalhesEvento;