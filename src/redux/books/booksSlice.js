import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
  apiId: null,
  appCreationStatus: 'idle',
  loadBooksStatus: 'idle',
  error: null,
};

export const createBookstoreApp = createAsyncThunk('bookstore/create', () => (
  new Promise((resolve, reject) => {
    axios.post(`${baseUrl}/apps/`, {})
      .then(({ data }) => {
        localStorage.setItem('bookstoreApiID', data);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  })
));

const booksSlice = createSlice({
  name: 'Books slice',
  initialState,
  reducers: {
    setBookstoreId: (state, { payload }) => ({
      ...state, apiId: payload, appCreationStatus: 'succeeded',
    }),
  },
});

export const { setBookstoreId } = booksSlice.actions;

export default booksSlice.reducer;
