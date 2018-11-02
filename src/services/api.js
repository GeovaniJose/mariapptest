import axios from 'axios';

const api = axios.create({ baseURL: 'https://maria-api.herokuapp.com/api' });

export default api;