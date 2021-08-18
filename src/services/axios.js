import axios from 'axios';

export const attachTokenToFutureRequests = (token) => {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Token ${token}`;
    return config;
  });
};
