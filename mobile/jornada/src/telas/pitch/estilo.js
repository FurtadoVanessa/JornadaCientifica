import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },

  video: {
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.85,
    marginTop: 10,
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
    fontSize: 18,
  },
});

export default Estilos;
