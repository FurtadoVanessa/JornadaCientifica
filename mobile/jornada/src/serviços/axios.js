import Axios from 'axios';
import * as utils from './utils';

export const api = Axios.create({
  baseURL: 'https://secret-shore-12290.herokuapp.com/',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);

api.interceptors.request.use(
  config => {
    return utils
      .getUser()
      .then(user => {
        console.log('user ', user);
        console.log('user token', user.storageToken);
        if (user.storageToken) {
          config.headers.Authorization = `Bearer ${user.storageToken}`;
        }
        return Promise.resolve(config);
      })
      .catch(error => {
        console.log(error);
        return Promise.resolve(config);
      });
  },
  error => {
    return Promise.reject(error);
  },
);
