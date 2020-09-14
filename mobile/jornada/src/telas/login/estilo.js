import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    paddingBottom: 25,
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.8,
  },
  esqueceuSenha: {
    color: '#E00',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
});

export default Estilos;
