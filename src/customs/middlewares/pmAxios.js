import axios from 'axios';

const pmAxios = axios.create({});

pmAxios.interceptors.request.use(
   function (config) {
      if (!config.headers.authorization) {
         config.headers.authorization = `Bearer ${window.localStorage.getItem('bearer')}`;
      }
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

pmAxios.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      return Promise.reject(error);
   }
);

export default pmAxios;
