import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },

  video: {
    height: 200,
    width: 300,
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
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#2F9E41',
    paddingBottom: 10,
  },

  heads: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  simpleText: {
    fontSize: 14,
  },
});

export default Estilos;
