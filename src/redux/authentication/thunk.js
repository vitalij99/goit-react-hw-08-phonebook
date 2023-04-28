import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, logoutApi, refreshUser, singnupApi } from 'redux/api/api';

export const singnupThunk = createAsyncThunk('auth/singup', user => {
  return singnupApi(user);
});
export const loginThunk = createAsyncThunk('auth/login', id => {
  return loginApi(id);
});
export const logoutThunk = createAsyncThunk('auth/logout', () => {
  return logoutApi();
});
export const refreshUserThunk = createAsyncThunk('auth/refresh', (...arr) =>
  refreshUser(...arr)
);
