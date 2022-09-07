import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6316044b33e540a6d38a8e66.mockapi.io';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const {
                data: { id },
            } = await axios.delete(`/contacts/${contactId}`);
            return id;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
