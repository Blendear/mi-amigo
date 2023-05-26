import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../lib/initFirebase";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect urlafter sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/starting-page",
  // auth providers, that let us log in to the app through them
  signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID], //hook1 - add google
};

// Component for authentication throguh github, google etc (depending on what i add in "signInOptions")
function Auth0Container() {
  return (
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Pineapple Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default Auth0Container;
