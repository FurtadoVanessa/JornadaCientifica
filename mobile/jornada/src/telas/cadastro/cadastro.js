import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';
//import Constants from 'expo-constants';

export default function App() {
  const [selectedValue, setSelectedValue] = useState('Participante');
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
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Text style={{textAlign: 'center'}}>Tipo de Usuário</Text>
          <Picker
            selectedValue={selectedValue}
            style={{height: 40, borderWidth: 10}}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
            mode={'dropdown'}>
            <Picker.Item label="Participante" value="Participante" />
            <Picker.Item label="Avaliador" value="Avaliador" />
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
            secureTextEntry={true}
          />
        </View>

        <View style={{width: 300, height: 75}}>
          <Button title="Cadastrar" color="#2F9E41" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
