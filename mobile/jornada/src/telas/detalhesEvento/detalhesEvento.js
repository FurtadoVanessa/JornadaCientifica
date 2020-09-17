import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import {api} from '../../serviços/axios';
import {StyledButton} from '../../components/Button';
import {InputStyled} from '../../components/Form';
import {Back} from '../../components/Back';

import Estilos from './estilo';

const detalhesEvento = ({route, navigation}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [key, setKey] = useState('');
  const {
    nomeEvento,
    nomeResposaveis,
    sinopse,
    key: validation,
    id,
  } = route.params;

  async function handleCheckIn() {
    if (validation === key) {
      try {
        let checked = false;
        const history = await api.get('/userHistory');
        history.data.map(historyData => {
          if (historyData.event[0].id === id) {
            checked = true;
          }
        });
        if (checked) {
          Alert.alert('Erro', 'Check-in já realizado!');
          return;
        }
        const response = await api.post('/userHistory', {
          event_id: id,
        });

        if (response.status === 200) {
          Alert.alert('Aviso', 'Check-In realizado com sucesso!');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Erro', 'Chave incorreta!');
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Back onPress={() => navigation.goBack()} />
        <View style={Estilos.container}>
          <View style={Estilos.card}>
            <View style={Estilos.event}>
              <Text style={Estilos.heads}>Título</Text>
              <Text style={Estilos.simpleText}>{nomeEvento}</Text>
              <Text style={Estilos.heads}>Responsáveis</Text>
              <Text style={Estilos.simpleText}>{nomeResposaveis}</Text>
              <Text style={Estilos.heads}>Sinopse </Text>
              <Text style={Estilos.simpleText}>{sinopse}</Text>
            </View>
          </View>
          <InputStyled
            text={'Insira a chave para fazer check-in '}
            onSubmitEditing={handleCheckIn}
            onChangeText={keyInput => setKey(keyInput)}
          />
          <StyledButton text={'Check-In'} onPress={handleCheckIn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default detalhesEvento;
