import axios from 'axios';

axios.defaults.baseURL = 'https://644039963dee5b763e323c3f.mockapi.io';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const singnupApi = async user => {
  const response = await axios.post('/users/signup', user);
  return response.data;
};
export const loginApi = async user => {
  const response = await axios.post('/users/login', user);
  return response.data;
};
export const logoutApi = async () => {
  const response = await axios.post(`/contacts/`);
  return response.data;
};
export const getContactApi = async () => {
  const response = await axios.get(`/users/current`);
  return response.data;
};

export const getContact = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};
export const createContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
