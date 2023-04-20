import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://6439a97690cd4ba563ebb40c.mockapi.io/api/v1/users/',
});
