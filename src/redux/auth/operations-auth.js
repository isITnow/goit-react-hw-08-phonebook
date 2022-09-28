import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'services/authAPI';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async profile => {
        console.log(profile);

        try {
            const user = await authAPI.registerUser(profile);
            console.log(user);
            return user;
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk('auth/login', async loginData => {
    console.log(loginData);
    try {
        return await authAPI.loginUser(loginData);
    } catch (error) {
        console.log(error.message);
    }
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
    console.log('logoutThunk');
    try {
    } catch (error) {}
});
