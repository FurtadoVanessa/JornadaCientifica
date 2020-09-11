import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0.5,
    paddingHorizontal: 10,
  },

  sinopse: {
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
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 15,
    borderRadius: 10,
  },

  heads: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  simpleText: {
    fontSize: 20,
    paddingBottom: 5,
  },
});

export default Estilos;
