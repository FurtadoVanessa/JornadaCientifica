import React, {useState, useContext} from 'react';
import {SafeAreaView, Text, View, ScrollView, Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {isEmail} from 'validator';

import {InputStyled} from '../../components/Form';
import {StyledButton} from '../../components/Button';
import {Back} from '../../components/Back';
import Estilos from './estilo';

import AuthContexto from '../../contexto/contextoAuth';

export default function App({navigation}) {
  const {register} = useContext(AuthContexto);
  const [type, setType] = useState('1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [institution, setInstitution] = useState('');
  const [campus, setCampus] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [retryPassword, setRetryPassword] = useState('');

  async function handleRegister() {
    if (name === '') {
      Alert.alert('Erro', 'O nome de usuário é necessário', [{text: 'OK'}], {
        cancelable: true,
      });
      return;
    }
    if (!isEmail(email)) {
      Alert.alert('Erro', 'E-mail inválido', [{text: 'OK'}], {
        cancelable: true,
      });
      return;
    }
    if (password !== retryPassword) {
      Alert.alert('Erro', 'As senhas não são iguais', [{text: 'OK'}], {
        cancelable: true,
      });
      return;
    }
    if (password.length < 6) {
      Alert.alert(
        'Erro',
        'A senha é muito curta (tamanho minimo 6 caracteres)',
        [{text: 'OK'}],
        {
          cancelable: true,
        },
      );
      return;
    }

    register(
      name,
      email,
      course,
      institution,
      campus,
      whatsapp,
      password,
      type,
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={Estilos.container}>
        <Back onPress={() => navigation.goBack()} />
        <InputStyled text="Nome" onChangeText={name1 => setName(name1)} />
        <InputStyled text="E-mail" onChangeText={email1 => setEmail(email1)} />
        <InputStyled
          text="Curso"
          onChangeText={course1 => setCourse(course1)}
        />
        <InputStyled
          text="Instituição"
          onChangeText={institution1 => setInstitution(institution1)}
        />
        <InputStyled
          text="Campus"
          onChangeText={campus1 => setCampus(campus1)}
        />
        <InputStyled
          text="WhatsApp"
          onChangeText={whatsapp1 => setWhatsapp(whatsapp1)}
        />
        <Text style={Estilos.texto}>Tipo de Usuário</Text>
        <View style={Estilos.pickerContainer}>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            mode={'dropdown'}>
            <Picker.Item label="Participante" value="1" />
            <Picker.Item label="Avaliador" value="2" />
          </Picker>
        </View>

        <InputStyled
          text="Senha"
          onChangeText={password1 => setPassword(password1)}
          secureTextEntry={true}
        />
        <InputStyled
          text="Confirme sua senha"
          onChangeText={retryPassword1 => setRetryPassword(retryPassword1)}
          secureTextEntry={true}
        />
        <StyledButton text="Cadastrar" onPress={handleRegister} />
      </SafeAreaView>
    </ScrollView>
  );
}
