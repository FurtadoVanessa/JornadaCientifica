import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0.5,
    paddingHorizontal: 10,
  },

  sinopse:{
    textAlign: 'center',
    fontSize: 15,
  },

  card: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 10,
  },

  event: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#2F9E41',
  },

  heads: {
    fontWeight: 'bold',
    fontSize: 24,
  },

  simpleText: {
    fontSize: 20,
  },
});

export default Estilos;
