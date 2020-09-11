import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';
import Estilos from './estilo';
import YouTube from 'react-native-youtube';
import Projeto from './projeto';
import {api} from '../../serviços/axios';

export default function Pitch() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function loadPitches() {
      const response = await api.get('/pitch');
      setData(response.data);
    }
    loadPitches();
  }, []);

  const pitches = data.map((data, i) => {
    return (
      <Projeto
        title={data.name}
        participantes={data.group}
        resumo={data.description}
        link={data.link}
      />
    );
  });

  //youtube();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={Estilos.container}>{pitches}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
