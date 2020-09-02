import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 10,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
  },

  btn: {
    flex: 2,
    flexDirection: 'row',
  },

  voltar: {
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 10,
  },

  body: {
    flex: 8,
    alignItems: 'center',
  },
  spacev: {
    height: 30,
  },
  spaceh: {
    width: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Estilos;
