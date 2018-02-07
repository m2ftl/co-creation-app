export function getUserState(state) {
  console.log(state);
  return {
    googleUser: {
      id: state.googleUserReducer.id,
      fullname: state.googleUserReducer.fullname,
      givenName: state.googleUserReducer.givenName,
      familyName: state.googleUserReducer.familyName,
      avatar: state.googleUserReducer.avatar,
      email: state.googleUserReducer.email,
      loggedIn:state.googleUserReducer.loggedIn
    }
  };
}
