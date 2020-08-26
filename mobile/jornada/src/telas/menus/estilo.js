import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    paddingHorizontal: 10,
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.01,
    width: Dimensions.get('window').width * 0.8,
  },
});

export default Estilos;
