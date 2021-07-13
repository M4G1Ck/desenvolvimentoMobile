import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://api-avocado.herokuapp.com/',
});

export default api;