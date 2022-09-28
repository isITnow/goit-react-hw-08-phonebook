import { createSlice } from '@reduxjs/toolkit';
import { registerThunk, loginThunk, logOutThunk } from './operations-auth';

const initStateAuth = {
    user: {},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initStateAuth,
    extraReducers: {
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
    },
});
