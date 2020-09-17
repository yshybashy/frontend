import axios from 'axios';

const api = axios.create({ //responsavel por indicar endereço da api
  baseURL: 'http://localhost:3005'
});

export default api;