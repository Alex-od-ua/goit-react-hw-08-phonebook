import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signupUser = data => {
  return authInstance.post('users/signup', data);
};

export const userLogin = data => {
  return authInstance.post('/users/login', data);
};
