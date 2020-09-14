import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
});

export default Estilos;
