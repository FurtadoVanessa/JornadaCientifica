import {api} from './axios';

export async function signIn({user, password}) {
  return await api
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
  return await api
    .post('/register', data)
    .then(function(response) {
      return response;
    })
    .catch(function(response) {
      return response;
    });
}
