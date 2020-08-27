import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
  formulario: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  entradaTexto: {
    backgroundColor: '#ffff',
    width: 320,
    height: 40,
    margin: 10,
    borderRadius: 10,
    borderColor: '#E00',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  texto: {
    fontSize: 18,
    color: '#E00',
    fontWeight: 'bold',
  },
});

export default Estilos;
