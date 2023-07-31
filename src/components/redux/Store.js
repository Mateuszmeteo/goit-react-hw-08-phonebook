import { configureStore, createSlice, createAsyncThunk, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/slice';




const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
]

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}


//////////
// Servers

// https://connections-api.herokuapp.com - API base URL

//////////
const API_URL = 'https://64b6729fdf0839c97e1594df.mockapi.io'
// const API_URL = 'https://connections-api.herokuapp.com'

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await fetch(`${API_URL}/contacts`);
    const data = await response.json();
    console.log(data)
    return data;
  });
  
  export const saveContact = createAsyncThunk('contacts/saveContact', async (contact) => {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    return data;
  });
  
  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId) => {
    await fetch(`${API_URL}/contacts/${contactId}`, {
      method: 'DELETE',
    });
    return contactId;
  });




const initialState = {
    contacts: [],
      filter: '',
      status: 'idle',
      error: null,
}


const contactsSlise = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchContacts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.contacts = action.payload;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          .addCase(saveContact.fulfilled, (state, action) => {
            state.contacts.push(action.payload);
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
          });
      },
})

export const { setFilter } = contactsSlise.actions


export const selectFilteredContacts = (state) => {
    const { contacts, filter } = state.contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };



 const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsSlise.reducer
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'

})
export default store

export const persistor = persistStore(store)


////////////


