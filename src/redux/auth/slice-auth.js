import { createSlice } from '@reduxjs/toolkit';
import {
    registerThunk,
    loginThunk,
    logoutThunk,
    refreshUserThunk,
} from './operations-auth';

const initStateAuth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initStateAuth,
    extraReducers: {
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logoutThunk.fulfilled]: state => {
            console.log('slice-logout');
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = true;
        },
        [refreshUserThunk.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.user = payload;
            state.isLoggedIn = true;
        },
    },
});
