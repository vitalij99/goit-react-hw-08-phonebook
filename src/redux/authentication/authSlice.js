import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  singnupThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
} from './thunk';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const arrThunks = [singnupThunk, loginThunk, logoutThunk, refreshUserThunk];

const fn = type => arrThunks.map(el => el[type]);

const handleIsLoggedIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
const handleLogout = state => {
  state.user = initialState.user;
  state.token = initialState.token;
  state.isLoggedIn = false;
};
const handleRefreshUserPending = state => {
  state.isRefreshing = true;
};
const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
const handleRefreshUserRejected = (state, { payload }) => {
  state.error = payload;
  state.isRefreshing = false;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(singnupThunk.fulfilled, handleIsLoggedIn)
      .addCase(loginThunk.fulfilled, handleIsLoggedIn)
      .addCase(logoutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.pending, handleRefreshUserPending)
      .addCase(refreshUserThunk.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUserThunk.rejected, handleRefreshUserRejected)
      .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
      .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled);
  },
});

export const authReducer = authSlice.reducer;
