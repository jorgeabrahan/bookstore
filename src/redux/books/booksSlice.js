import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  books: [],
  apiId: null,
  appCreationStatus: 'idle',
  loadBooksStatus: 'idle',
  removing: false,
  adding: false,
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

export const loadBooks = createAsyncThunk('bookstore/load', (arg, { getState }) => (
  new Promise((resolve, reject) => {
    const state = getState();
    axios.get(`${baseUrl}/apps/${state.books.apiId}/books`)
      .then(({ data }) => {
        if (data === '' || (typeof data === 'object' && Object.entries(data).length === 0)) {
          resolve([]);
          return;
        }
        const books = [];
        Object.entries(data).forEach((arr) => {
          const [id, [book]] = arr;
          const { title, category, author } = book;
          books.push({
            item_id: id,
            title,
            category,
            author,
          });
        });
        resolve(books);
      })
      .catch((error) => {
        reject(error);
      });
  })
));

export const postBook = createAsyncThunk('bookstore/post', (book, { getState }) => (
  new Promise((resolve, reject) => {
    const state = getState();
    axios.post(`${baseUrl}/apps/${state.books.apiId}/books`, book)
      .then(() => {
        resolve(book);
      })
      .catch((error) => {
        reject(error);
      });
  })
));

export const removeBook = createAsyncThunk('bookstore/remove', (id, { getState }) => (
  new Promise((resolve, reject) => {
    const state = getState();
    axios.delete(`${baseUrl}/apps/${state.books.apiId}/books/${id}`, { item_id: id })
      .then(() => {
        resolve(id);
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
  extraReducers(builder) {
    builder
      .addCase(createBookstoreApp.pending, (state) => ({ ...state, appCreationStatus: 'loading' }))
      .addCase(createBookstoreApp.fulfilled, (state, { payload }) => ({
        ...state,
        appCreationStatus: 'succeeded',
        apiId: payload,
      }))
      .addCase(createBookstoreApp.rejected, (state, { error }) => ({
        ...state,
        appCreationStatus: 'failed',
        error: error.message,
      }))
      .addCase(loadBooks.pending, (state) => ({ ...state, loadBooksStatus: 'loading' }))
      .addCase(loadBooks.fulfilled, (state, { payload }) => ({
        ...state,
        loadBooksStatus: 'succeeded',
        books: payload,
      }))
      .addCase(loadBooks.rejected, (state, { error }) => ({
        ...state,
        error: error.message,
      }))
      .addCase(postBook.pending, (state) => ({
        ...state,
        adding: true,
      }))
      .addCase(postBook.fulfilled, (state, { payload }) => ({
        ...state,
        books: [...state.books, payload],
        adding: false,
      }))
      .addCase(removeBook.pending, (state) => ({
        ...state,
        removing: true,
      }))
      .addCase(removeBook.fulfilled, (state, { payload }) => ({
        ...state,
        books: state.books.filter((book) => book.item_id !== payload),
        removing: false,
      }));
  },
});

export const { setBookstoreId } = booksSlice.actions;

export default booksSlice.reducer;
