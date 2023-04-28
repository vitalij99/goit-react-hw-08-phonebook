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

export const singnupApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/signup', user);
    tokenOperation.setToken(data.token);
    Notify.success('Registrated succesfully!');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};
export const loginApi = async (user, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/login', user);
    tokenOperation.setToken(data.token);
    Notify.success('Login sucess!');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};
export const logoutApi = async (_, thunkAPI) => {
  try {
    const { data } = await axios.post('/users/logout');
    Notify.success('Login logout!');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};
export const refreshUser = async (_, thunkAPI) => {
  const state = thunkAPI.getState();

  const persistedToken = state.authReducer.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    // If there is a token, add it to the HTTP header and perform the request
    tokenOperation.setToken(persistedToken);
    const res = await axios.get('/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
export const fetchContacts = async (_, thunkAPI) => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};

export const createContact = async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post('/contacts', contact);
    Notify.success('Contact create!');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};
export const deleteContact = async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    Notify.success('Contact delete!');
    return data;
  } catch (error) {
    Notify.failure(error);
    thunkAPI.rejectWithValue(error.message);
  }
};
