

export const selectIsLoggedIn = state => state.auth.IsLoggedIn;

export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.IsRefreshing

export const selectIsError = state => state.auth.error;