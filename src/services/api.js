import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://127.0.0.1:8000`,
  headers: {
    // Authorization: "Bearer {token}"
  },

});
HTTP.interceptors.request.use(request => {
  console.log(request.method)
  return request
});
HTTP.interceptors.response.use(response => {
  console.log('response:', response.method)
  return response
}, error => {
  console.log('response:', error)
});

export default {
  setHeader(headers) {
    HTTP.defaults.headers.common['Authorization'] = headers
  },
  login(payload) {
    return HTTP.post('api/v1/token/', payload)
  },
  register(payload) {
    return HTTP.post('api/v1/register/', payload)
  },
  pets() {
    return HTTP.get('api/v1/pets/')
  },

}
