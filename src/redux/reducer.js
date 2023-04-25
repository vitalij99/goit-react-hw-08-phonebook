import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';
import { authReducer } from './authentication/authSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
});
