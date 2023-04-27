import axios from 'axios';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const tokenOperation = {
  setToken: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearToken: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const singnupApi = async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    tokenOperation.setToken(data.token);
    Notify.success('Registrated succesfully!');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};
export const loginApi = async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    tokenOperation.setToken(data.token);
    Notify.success('Login sucess!');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};
export const logoutApi = async () => {
  try {
    const { data } = await axios.post('/users/logout');
    Notify.success('Login logout!');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};
export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};

export const createContact = async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    Notify.success('Contact create!');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};
export const deleteContact = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    Notify.success('Contact delete!');
    return data;
  } catch (error) {
    Notify.failure(error);
  }
};
