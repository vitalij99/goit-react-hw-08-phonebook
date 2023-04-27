import { createAsyncThunk } from '@reduxjs/toolkit';
import { createContact, deleteContact, fetchContacts } from 'redux/api/api';

export const getContactThunk = createAsyncThunk('contacts/fetchAll', () => {
  return fetchContacts();
});
export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => {
    return createContact(contact);
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => {
    return deleteContact(id);
  }
);
