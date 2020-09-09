import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://secret-shore-12290.herokuapp.com/',
  timeout: 20000,
});
