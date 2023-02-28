import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'Books slice',
  initialState,
  reducers: {
    addBook: (state, { payload }) => ({ ...state, payload }),
    removeBook: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;