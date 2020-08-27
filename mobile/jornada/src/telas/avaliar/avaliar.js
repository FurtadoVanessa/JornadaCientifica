import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Slider,
  ScrollView,
} from 'react-native';
import styles from './estilo';

export default class Avaliar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question1: 4,
      question2: 4,
      question3: 4,
    };
  }

  onValue1Change(value) {
    this.setState({question1: value});
  }

  onValue2Change(value) {
    this.setState({question2: value});
  }

  onValue3Change(value) {
    this.setState({question3: value});
  }
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Text style={styles.title}>Avaliação de Apresentação</Text>
            <View style={styles.header}>
              <Text style={styles.info}>Nome do Projeto</Text>
              <Text style={styles.text}>Projeto A</Text>
              <Text style={styles.info}>Autor(a)</Text>
              <Text style={styles.text}>Autor X</Text>
              <Text style={styles.info}>Apresentador(a)</Text>
              <Text style={styles.text}>Pessoa X</Text>
            </View>
          </View>
          <View style={styles.form}>
            <Text style={styles.info}>Confirme o nome do apresentador:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.info}>A introdução condiz com o projeto</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor="#1EB1FC"
              maximumTractTintColor="#1EB1FC"
              step={1}
              value={5}
              onValueChange={value => this.onValue1Change(value)}
              style={styles.slider}
              thumbTintColor="#1EB1FC"
            />
            <Text style={styles.info}>
              Os materiais e métodos condizem com o projeto
            </Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor="#1EB1FC"
              maximumTractTintColor="#1EB1FC"
              step={1}
              value={5}
              onValueChange={value => this.onValue2Change(value)}
              style={styles.slider}
              thumbTintColor="#1EB1FC"
            />
            <Text style={styles.info}>O resultado condiz com o projeto</Text>
            <Slider
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor="#1EB1FC"
              maximumTractTintColor="#1EB1FC"
              step={1}
              value={5}
              onValueChange={value => this.onValue3Change(value)}
              style={styles.slider}
              thumbTintColor="#1EB1FC"
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => ''}
              accessibilityLabel="clique aqui para enviar a avaliação">
              <Text style={styles.buttonText}> ENVIAR AVALIAÇÃO </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
