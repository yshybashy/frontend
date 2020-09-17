import axios from 'axios';

const api = axios.create({ //responsavel por indicar endereço da api
  baseURL: process.env.REACT_APP_API_URL
});

export default api;