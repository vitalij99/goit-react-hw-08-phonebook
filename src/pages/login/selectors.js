export const selectAuthReducer = state => state.authReducer;
export const selectUser = state => state.authReducer.user;
export const selectIsRefreshing = state => state.authReducer.isRefreshing;
export const selectIsisLoggedIn = state => state.authReducer.isLoggedIn;
export const selectIsLoading = state => state.authReducer.isLoading;
