import {store} from "../store/store";

/**
 * This function need to be accessible globally for google connect to work.
 * As we work with a build step, functions are by default only accessible inside a file or with an import
 * statement, but here, we need this function attached to the window object to be global
 */
window.googleConnectCallback = function(googleUser) {
  // Useful data for your client-side scripts:
  const profile = googleUser.getBasicProfile();
  store.dispatch({
    type: "LOGGED_IN",
    id: profile.getId(), // Don't send this directly to your server!
    fullname: profile.getName(),
    givenName: profile.getGivenName(),
    familyName: profile.getFamilyName(),
    avatar: profile.getImageUrl(),
    email: profile.getEmail()
  });

  // The ID token you'd need to pass to your backend:
  const id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
};
