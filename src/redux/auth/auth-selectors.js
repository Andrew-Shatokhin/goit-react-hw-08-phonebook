const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  getIsFetchingCurrent
}

export default authSelectors;
