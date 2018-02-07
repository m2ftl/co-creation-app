export function getUserState(state) {
  console.log(state);

  return {
    user: {
      id: state.userReducer.id,
      fullname: state.userReducer.fullname,
      givenName: state.userReducer.givenName,
      familyName: state.userReducer.familyName,
      avatar: state.userReducer.avatar,
      email: state.userReducer.email
    }
  };
}
