import {axios} from './axios';

export async function signIn({user, password}) {
  return await axios
    .post('/login', {
      email: user, //'yuri@email.com'
      password: password, //'senha123'
    })
    .then(function(response) {
      return response;
    })
    .catch(function(response) {
      return response;
    });
}
