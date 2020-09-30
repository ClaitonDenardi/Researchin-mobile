import axios from 'axios';

const api = axios.create({
  baseURL: 'https://researchin-backend.herokuapp.com',
});

export default api;