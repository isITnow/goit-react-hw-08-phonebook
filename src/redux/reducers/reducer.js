import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from '../contacts/slice-contacts';
import { filterSlice } from '../filter/slice-filter';
import { authSlice } from 'redux/auth/slice-auth';

export const rootReducer = combineReducers({
    user: authSlice.reducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});
