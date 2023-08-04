import { createSlice } from "@reduxjs/toolkit"
import { register, logIn, logOut, refreshUser } from "./operations"

const initialState = {
    user: {
        name: null, email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [register.rejected](state, action) {
            state.error = action.payload;
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isLoggedIn = true
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null}
            state.token = null
            state.isLoggedIn = false
        },
        [refreshUser.pending](state) {
            state.isRefreshing = true
        },
        [refreshUser.fulfilled](state, action) {
            state.user = action.payload
            state.isLoggedIn = true
            state.isRefreshing = false
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false
        }
    }
})

export const authReducer = authSlice.reducer





//////////////////=====================================/////////////////////////////////////////


// import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";

// const initialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.error = action.error.message;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;

