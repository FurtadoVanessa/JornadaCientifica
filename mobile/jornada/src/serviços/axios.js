import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'http://192.168.0.99:3333', //É o ip da minha máquina deve ser o mesmo valor do HOST no .env
  timeout: 20000,
});
