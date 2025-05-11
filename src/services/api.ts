import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu_api_aqui',
});

export default api;
