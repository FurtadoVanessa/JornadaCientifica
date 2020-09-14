import React, {useContext} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Estilos from './estilo';
import Evento from './evento';
import {api} from '../../serviços/axios';
import {Back} from '../../components/Back';

function Agenda({navigation}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/event');

      setData(response.data);
    }

    loadEvents();
  }, []);

  const eventos = data.map((eventData, i) => {
    return (
      <TouchableOpacity
        key={i}
        style={Estilos.container}
        onPress={() => {
          navigation.navigate('Detalhes do Evento', {
            nomeEvento: eventData.name,
            nomeResposaveis: eventData.speaker,
            sinopse: eventData.description,
          });
        }}>
        <Evento
          title={eventData.name}
          hour={eventData.hour}
          location={eventData.place}
        />
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView>
      <SafeAreaView>
        <Back onPress={() => navigation.goBack()} />
        <View style={Estilos.container}>{eventos}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Agenda;
