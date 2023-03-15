import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const { data: result } = await api.signupUser(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.massage);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const { data: result } = await api.userLogin(data);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.massage);
  }
});
