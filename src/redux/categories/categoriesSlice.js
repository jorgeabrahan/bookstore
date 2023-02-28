import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'Categories slice',
  initialState,
  reducers: {
    checkStatus: () => ({ categories: 'Under construction' }),
  },
});

export default categoriesSlice.reducer;
