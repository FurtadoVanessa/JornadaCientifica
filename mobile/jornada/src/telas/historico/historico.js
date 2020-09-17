import React, {useContext} from 'react';
import {View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import Estilos from './estilo';
import Evento from './evento';
import {api} from '../../serviços/axios';
import {Back} from '../../components/Back';

function Historico({navigation}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/userHistory');
      setData(response.data);
    }

    loadEvents();
  }, []);

  const eventos = data.map((historyData, i) => {
    const eventData = historyData.event[0];
    return (
      <View key={i} style={Estilos.container}>
        <Evento
          title={eventData.name}
          hour={eventData.hour}
          location={eventData.place}
        />
      </View>
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

export default Historico;
