import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from '../contacts/slice-contacts';
import { filterSlice } from '../filter/slice-filter';
import { authSlice } from 'redux/auth/slice-auth';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistedRootReducer = persistReducer(persistConfig, authSlice.reducer);

export const rootReducer = combineReducers({
    user: persistedRootReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});
