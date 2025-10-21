
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    params : {
        api_key: 'API_KEY'
    }
})

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = 'TOKEN FROM INTERCEPTORS'
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
//   { synchronous: true, runWhen: () => /* This function returns true */}
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function onRejected(error) {
    // Show toast message => error
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosInstance;