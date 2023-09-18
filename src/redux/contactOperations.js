import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_ENDPOINT = 'https://64d525c9b592423e4695308b.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post(API_ENDPOINT, contact);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      await axios.delete(`${API_ENDPOINT}/${contactId}`);
      return contactId;
    } catch (error) {
      throw error;
    }
  }
);
