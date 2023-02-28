import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'Books slice',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({ books: [...state.books, payload] }),
    removeBook: (state, { payload }) => ({
      books: state.books.filter((book) => book.id !== payload),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
