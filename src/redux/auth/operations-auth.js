import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'services/authAPI';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async profile => {
        try {
            const user = await authAPI.registerUser(profile);
            return user;
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk('auth/login', async loginData => {
    try {
        return await authAPI.loginUser(loginData);
    } catch (error) {
        console.log(error.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
    try {
    } catch (error) {
        console.log(error.message);
    }
});

export const refreshUserThunk = createAsyncThunk(
    'auth/refres',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.user.token;
        if (persistedToken === null) {
            return;
        }
        try {
            authAPI.headerToken.set(persistedToken);
            return await authAPI.getCurrentUser();
        } catch (error) {
            console.log(error.message);
        }
    }
);
