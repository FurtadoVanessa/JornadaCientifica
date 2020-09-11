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
import {api} from '../../serviços/axios';

function Agenda({navigation}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/event');

      setData(response.data);
    }

    loadEvents();
  }, []);

  const eventos = data.map((data, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={Estilos.container}
        onPress={() => {
          navigation.navigate('Detalhes do Evento', {
            nomeEvento: data.name,
            nomeResposaveis: data.speaker,
            sinopse: data.description,
          });
        }}>
        <Evento title={data.name} hour={data.hour} location={data.place} />
      </TouchableOpacity>
    );
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={Estilos.container}>{eventos}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Agenda;
