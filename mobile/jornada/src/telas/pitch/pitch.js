import * as React from 'react';
import {Button, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Back} from '../../components/Back';
import Estilos from './estilo';
import YouTube from 'react-native-youtube';
import Projeto from './projeto';
import {api} from '../../serviços/axios';

export default function Pitch({navigation}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function loadPitches() {
      const response = await api.get('/pitch');
      setData(response.data);
    }
    loadPitches();
  }, []);

  const pitches = data.map((d, i) => {
    return (
      <Projeto
        key={d.id}
        title={d.name}
        participantes={d.group}
        resumo={d.description}
        link={d.link}
      />
    );
  });

  //youtube();
  return (
    <SafeAreaView>
      <ScrollView>
        <Back onPress={() => navigation.goBack()} />
        <View style={Estilos.container}>{pitches}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
