import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Picker,
  Alert,
} from 'react-native';
import {isEmail} from 'validator';

import {axios} from '../../serviços/axios';
import AuthContexto from '../../contexto/contextoAuth';

export default function App() {
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
      Alert.alert('Erro', 'A senha é muito curta', [{text: 'OK'}], {
        cancelable: true,
      });
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
      retryPassword,
      type,
    );
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 30}}>
      <ScrollView style={{marginHorizontal: 30}}>
        <View
          style={{
            alignSelf: 'flex-start',
            width: 95,
            height: 35,
            marginTop: 15,
          }}>
          <Button title="Voltar" color="#2F9E41" />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Nome</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={name1 => setName(name1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Email</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={email1 => setEmail(email1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Curso</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={course1 => setCourse(course1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Instituição</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={institution1 => setInstitution(institution1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Campus</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={campus1 => setCampus(campus1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>WhatsApp</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={whatsapp1 => setWhatsapp(whatsapp1)}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Tipo de Usuário</Text>
          <Picker
            selectedValue={type}
            style={{height: 40, borderWidth: 10}}
            onValueChange={(itemValue, itemIndex) => setType(itemValue)}
            mode={'dropdown'}>
            <Picker.Item label="Participante" value="1" />
            <Picker.Item label="Avaliador" value="2" />
          </Picker>
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Senha</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={password1 => setPassword(password1)}
            secureTextEntry={true}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Confirme sua Senha</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
              textAlign: 'center',
            }}
            onChangeText={retryPassword1 => setRetryPassword(retryPassword1)}
            secureTextEntry={true}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Button title="Cadastrar" color="#2F9E41" onPress={handleRegister} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
