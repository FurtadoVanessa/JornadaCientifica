import {axios} from './axios';

export async function signIn({user, password}) {
  return await axios
    .post('/login', {
      email: user,
      password: password,
    })
    .then(function(response) {
      return response;
    })
    .catch(function(response) {
      return response;
    });
}

export async function register(data) {
  return await axios
    .post('/register', data)
    .then(function(response) {
      return response;
    })
    .catch(function(response) {
      return response;
    });
}

export async function getEvent(data) {
  return await axios
    .get('/event')
    .then(function(response) {
      return response;
    })
    .catch(function(response) {
      return response;
    });
}
