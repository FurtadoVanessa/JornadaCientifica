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
import Evento from './evento';

function Agenda({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={Estilos.container}>
          <TouchableOpacity
            style={Estilos.container}
            onPress={() => {navigation.navigate('Detalhes do Evento', {
              nomeEvento: 'Palestra 01',
              nomeResposaveis: 'Fulano, Ciclano',
              sinopse:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices imperdiet libero, ac condimentum lectus molestie sit amet. Pellentesque lacinia euismod justo. Cras tincidunt accumsan ante sed tempor. Suspendisse eget enim non sem facilisis rhoncus at quis lacus. Aliquam tristique turpis quis ligula interdum pharetra. Sed a lorem ac diam dictum interdum. Nunc ultricies consectetur ipsum, ac euismod neque tincidunt et. Mauris ac magna at dui lobortis dignissim eget a libero. Morbi ullamcorper augue eget neque semper rhoncus. Praesent cursus in libero et maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices imperdiet libero, ac condimentum lectus molestie sit amet. Pellentesque lacinia euismod justo. Cras tincidunt accumsan ante sed tempor. Suspendisse eget enim non sem facilisis rhoncus at quis lacus. Aliquam tristique turpis quis ligula interdum pharetra. Sed a lorem ac diam dictum interdum. Nunc ultricies consectetur ipsum, ac euismod neque tincidunt et. Mauris ac magna at dui lobortis dignissim eget a libero. Morbi ullamcorper augue eget neque semper rhoncus. Praesent cursus in libero et maximus.',
              });
            }}>
            <Evento
              title="Palestra01"
              hour="09:00 as 11:00"
              location="Auditório"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={Estilos.container}
            onPress={() => {navigation.navigate('Detalhes do Evento', {
                nomeEvento: 'Palestra 02',
                nomeResposaveis: 'Maria, Joao',
                sinopse: 'Ipsum',
                });
            }}>
            <Evento
              title="Palestra02"
              hour="11:00 as 12:00"
              location="Auditório"
            />
            </TouchableOpacity>
            <TouchableOpacity
              style={Estilos.container}
              onPress={() => {navigation.navigate('Detalhes do Evento', {
                nomeEvento: 'Palestra 03',
                nomeResposaveis: 'Teste, Teste2',
                sinopse: 'Dolor',
                });
            }}>
            <Evento
              title="Palestra03"
              hour="13:00 as 15:00"
              location="Auditório"
            />
            </TouchableOpacity>
            <TouchableOpacity
              style={Estilos.container}
              onPress={() => {navigation.navigate('Detalhes do Evento', {
                nomeEvento: 'Palestra 04',
                nomeResposaveis: 'Teste3, Teste4',
                sinopse: 'Sit amet',
                });
            }}>
            <Evento
              title="Palestra04"
              hour="15:00 as 17:00"
              location="Auditório"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Agenda;
