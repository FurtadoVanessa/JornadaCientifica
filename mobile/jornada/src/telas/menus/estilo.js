import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    paddingHorizontal: 10,
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.8,
  },
  botaoContainer: {
    backgroundColor: '#2F9E41',
    paddingHorizontal: 200,
    paddingVertical: 10,
    margin: 10,
    borderRadius: 10,
  },
  botaoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Estilos;
