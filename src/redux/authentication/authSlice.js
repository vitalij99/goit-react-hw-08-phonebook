import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  singnupThunk,
  loginThunk,
  logoutThunk,
  getContactThunk,
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
};
const arrThunks = [singnupThunk, loginThunk, logoutThunk, getContactThunk];

const fn = type => arrThunks.map(el => el[type]);

const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};
const handleFulfilledGet = ({ contacts }, { payload }) => {
  contacts.items = payload;
};
const handleFulfilledDel = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(el => el.id !== payload.id);
};
const handleFulfilledCreate = ({ contacts }, { payload }) => {
  contacts.items.push(payload);
};
const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};
const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = '';
};
// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   // extraReducers: builder => {
//   //   const { PENDING, FULFILLED, REJECTED } = STATUS;
//   //   builder
//   //     .addCase(getContactThunk.fulfilled, handleFulfilledGet)
//   //     .addCase(createContactThunk.fulfilled, handleFulfilledCreate)
//   //     .addCase(deleteContactThunk.fulfilled, handleFulfilledDel)
//   //     .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
//   //     .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
//   //     .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled);
//   // },
// });

// export const authReducer = authSlice.reducer;
