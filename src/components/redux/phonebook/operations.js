import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Servers

// https://connections-api.herokuapp.com - API base URL

axios.defaults.baseURL = "https://connections-api.herokuapp.com"


export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (_, thunkApi) => {

    try {
        const response = await axios.get("/contacts")

        return response.data
    } catch (e) {

        return thunkApi.rejectWithValue(e.message)
    }

})

export const addContact = createAsyncThunk("contacts/addContact", async (text, thunkApi) => {
    try {
        const response = await axios.post("/contacts", { text })

        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`)

        return response.data
    } catch (e) {
        return thunkApi.rejectWithValue(e.message)
    }
})

