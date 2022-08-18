import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://jsn-super-hero.herokuapp.com';

export const getHeroes = createAsyncThunk('heroes/get', async () => {
  try {
    const { data } = await axios.get('/api/heroes');
    return data;
  } catch (error) {}
});

export const getHeroesById = createAsyncThunk(
  'heroes/getById',
  async heroId => {
    try {
      const { data } = await axios.get(`/api/heroes/${heroId}`);
      return data;
    } catch (error) {}
  }
);

export const postHeroes = createAsyncThunk('heroes/post', async credentials => {
  try {
    await axios.post('/api/heroes', credentials);
    const { data } = await axios.get('/heroes');
    console.log(' postHeroes data', data);
    return data;
  } catch (error) {}
});

export const patchHero = createAsyncThunk('heroes/patch', async HeroInfo => {
  try {
    const { data } = await axios.patch(`/api/heroes/${HeroInfo._id}`, HeroInfo);
    return data;
  } catch (error) {}
});

export const deleteHero = createAsyncThunk('heroes/delete', async heroId => {
  try {
    await axios.delete(`/api/heroes/${heroId}`);
    const { data } = await axios.get('/heroes');
    return data;
  } catch (error) {}
});
