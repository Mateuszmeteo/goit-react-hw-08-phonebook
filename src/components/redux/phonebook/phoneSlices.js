import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = state.contacts.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.isLoading = false;
      state.error = null;
      if (state.filter !== '') {
        state.filter.push(action.payload);
      }
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      const contactId = action.payload.id;
      state.contacts = state.contacts.filter(el => el.id !== contactId);
      state.isLoading = false;
      state.error = null;
      if (state.filter !== '') {
        state.filter = state.filter.filter(el => el.id !== contactId);
      }
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
