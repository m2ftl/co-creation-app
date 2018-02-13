const initialState = {
  id: null,
  fullname: null,
  givenName: null,
  familyName: null,
  avatar: null,
  email: null,
  loggedIn: false,
  isAdmin: false,
};

export default function googleUserReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        id: action.id,
        fullname: action.fullname,
        givenName: action.givenName,
        familyName: action.familyName,
        avatar: action.avatar,
        email: action.email,
        loggedIn: true,
      };
    case "SIGN_OUT":
      return initialState;
    case "IS_ADMIN":
    return{
      ...state,
      isAdmin: true
    }
    default:
      return state;
  }
}
