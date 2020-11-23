import axios from 'axios';

import apiParams from '../config/apiParams'

const api = axios.create({
  baseURL: apiParams.baseURL,
  params: {
    api_key: apiParams.api_key
  }
})

export default api;