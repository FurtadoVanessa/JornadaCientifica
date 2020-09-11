import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    paddingBottom: 25,
    paddingTop: 25,
  },
  logo: {
    height: Dimensions.get('window').height * 0.36,
    marginVertical: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.8,
  },
  logout: {
    alignSelf: 'flex-end',
    paddingRight: 4,
    paddingTop: 4,
  },
  opcoes: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
  separador: {
    margin: 0,
  },
});

export default Estilos;
