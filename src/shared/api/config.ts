import Axios from 'axios';

export const axios = Axios.create({
  baseURL: 'https://api.air-ways.online',
  timeout: 5000,
});
