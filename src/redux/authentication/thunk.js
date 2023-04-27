import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, logoutApi, singnupApi } from 'redux/api/api';

export const singnupThunk = createAsyncThunk('auth/singup', user => {
  return singnupApi(user);
});
export const loginThunk = createAsyncThunk('auth/login', id => {
  return loginApi(id);
});
export const logoutThunk = createAsyncThunk('auth/logout', () => {
  return logoutApi();
});
