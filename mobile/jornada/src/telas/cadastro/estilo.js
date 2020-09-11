import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 25,
    paddingTop: 25,
  },
  texto: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickerContainer: {
    width: Dimensions.get('window').width * 0.95,
    height: 40,
    margin: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#ffff',
    justifyContent: 'center',
  },
});

export default Estilos;
