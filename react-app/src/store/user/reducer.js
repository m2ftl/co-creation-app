const initialState = {
  id: null,
  fullname: null,
  givenName: null,
  familyName: null,
  avatar: null,
  email: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        id: action.id,
        fullname: action.fullname,
        givenName: action.givenName,
        familyName: action.familyName,
        avatar: action.avatar,
        email: action.email
      };
    case "SIGN_OUT":
      return initialState;
    default:
      return state;
  }
}
