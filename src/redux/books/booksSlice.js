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
