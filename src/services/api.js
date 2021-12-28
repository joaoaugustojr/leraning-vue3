import axios from 'axios';

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
})

// Get all currencies
const all = () => {
  return api.get('/all');
}

// Get selected currencies
const listen = (codes = []) => {
  return api.get(`/all/${codes.join()}`);
}

export default { all, listen };
