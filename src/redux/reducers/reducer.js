import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from '../contacts/slice-contacts';
import { filterSlice } from '../filter/slice-filter';

export const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});
