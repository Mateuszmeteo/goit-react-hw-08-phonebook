import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    const response = await fetch('https://64b6729fdf0839c97e1594df.mockapi.io/contacts');
    const data = await response.json();
    console.log(data)
    return data;
  });
  
  export const saveContact = createAsyncThunk('contacts/saveContact', async (contact) => {
    const response = await fetch('https://64b6729fdf0839c97e1594df.mockapi.io/contacts', {
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
    await fetch(`https://64b6729fdf0839c97e1594df.mockapi.io/contacts/${contactId}`, {
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



export default configureStore({
    reducer: {
        contacts: contactsSlise.reducer
    }
})