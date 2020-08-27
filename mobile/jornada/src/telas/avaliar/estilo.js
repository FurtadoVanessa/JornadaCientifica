import {StyleSheet, Dimensions} from 'react-native';

const Estilos = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 10,
  },
  safe: {
    flex: 1,
    backgroundColor: '#e5e5e5',
  },
  header: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
  },
  form: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    shadowRadius: 10,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#e5e5e5',
    alignSelf: 'stretch',
    padding: 10,
  },
  slider: {
    borderRadius: 20,
    backgroundColor: '#e5e5e5',
    alignSelf: 'stretch',
    padding: 10,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  info: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  text: {
    alignSelf: 'flex-start',
  },
  button: {
    color: '#2F9E41',
    backgroundColor: '#2F9E41',
    borderRadius: 10,
    shadowRadius: 10,
    padding: 20,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Estilos;
