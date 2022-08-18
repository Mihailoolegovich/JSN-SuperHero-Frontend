import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import heroesSlice from './heroes/heroesSlice';

export const store = configureStore({
  reducer: {
    heroes: heroesSlice,
  },
});

setupListeners(store.dispatch);
export default store;
