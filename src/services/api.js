import axios from 'axios';

const api = axios.create({
    baseURL : 'https://fullstackbkend.herokuapp.com/api'
});

export default api;