import { createSlice } from '@reduxjs/toolkit';
import {
  getHeroes,
  getHeroesById,
  postHeroes,
  patchHero,
  deleteHero,
} from './heroesOperations';

const heroesSlice = createSlice({
  name: 'heroes',
  initialState: [],
  extraReducers: {
    [getHeroes.fulfilled](_, action) {
      return action.payload;
    },
    [getHeroesById.fulfilled](_, action) {
      return action.payload;
    },
    [postHeroes.fulfilled](_, action) {
      return action.payload;
    },
    [patchHero.fulfilled](_, action) {
      return action.payload;
    },
    [deleteHero.fulfilled](_, action) {
      return action.payload;
    },
  },
});

export default heroesSlice.reducer;
