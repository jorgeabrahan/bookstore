import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'Categories slice',
  initialState,
  reducers: {
    checkStatus: () => ({ categories: 'Under construction' }),
    filterByCountry: (state, { payload }) => {
      if (typeof state.categories === 'string') return { ...state };
      return { categories: state.categories.filter(({ country }) => country === payload) };
    },
  },
});

export const { checkStatus, filterByCountry } = categoriesSlice.actions;

export default categoriesSlice.reducer;
