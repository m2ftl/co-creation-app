/* global gapi */

export function signOut(dispatch) {
  return {
    signOut: () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2
        .signOut()
        .then(() => dispatch({ type: "SIGN_OUT" }))
        .then(() => window.location.reload()); // unfortunately, the signin button can only appear when we load the page
    }
  };
}
