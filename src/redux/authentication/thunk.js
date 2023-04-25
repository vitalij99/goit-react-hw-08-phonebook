import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContactApi, loginApi, logoutApi, singnupApi } from 'redux/api/api';

export const singnupThunk = createAsyncThunk('contacts/fetchAll', () => {
  return singnupApi();
});
export const loginThunk = createAsyncThunk('contacts/addContact', id => {
  return loginApi(id);
});
export const logoutThunk = createAsyncThunk('contacts/deleteContact', id => {
  return logoutApi(id);
});
export const getContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return getContactApi(id);
  }
);
