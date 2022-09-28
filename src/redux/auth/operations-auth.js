import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerThunk = createAsyncThunk(
    'auth/register',
    async profile => {
        console.log(profile);

        try {
        } catch (error) {}
    }
);

export const loginThunk = createAsyncThunk('auth/login', async loginData => {
    console.log(loginData);
    try {
    } catch (error) {}
});

export const logOutThunk = createAsyncThunk('auth/logout', async () => {
    console.log('logoutThunk');
    try {
    } catch (error) {}
});
