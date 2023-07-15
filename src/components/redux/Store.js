import { configureStore, createSlice } from "@reduxjs/toolkit";


const inicialState = {
    contacts: [],
    filter: ""
}


const contactsSlise = createSlice({
    name: "contacts",
    inicialState,
    reducers: {
        saveContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts.filter(contact => contact.id !== action.payload)
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    }
}

)

export const { saveContact, deleteContact, setFilter } = contactsSlise.actions

export default configureStore({
    reducer: {
        contacts: contactsSlise.reducer
    }
})