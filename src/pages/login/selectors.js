export const selectAuthReducer = state => state.authReducer;
export const selectUser = state => state.authReducer.user;
export const selectIsLoading = state => state.authReducer.user.isLoading;
