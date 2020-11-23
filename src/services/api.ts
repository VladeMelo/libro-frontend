import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '2435e6a761cc8b70f5738f5d0308c9f7'
  }
})

export default api;