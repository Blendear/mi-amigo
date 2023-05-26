import styles from "src/styles/sass/styles-all.module.scss";

import firebase from "../features/authentication/lib/initFirebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

import Auth0Container from "../features/authentication/components/Auth0";

const SignInPage = () => {
  // Firestore
  const db = firebase.firestore();

  // User Authentication data - shows data about the user and user's login process
  const [user, loading, error] = useAuthState(firebase.auth());

  return (
    <div>
      {/* 
      // If user's sign-in session is loading - show this
      */}
      cośtam
      {loading && <h4>Loading...</h4>}
      {/* 
      // If user session doesnt exist (isn't logged in) - show this
      */}
      {!user && <Auth0Container />}
      {/* 
      // If user session exists (is signed in) - show this
      */}
      {user && <div>Zalogowanyś c:</div>}
    </div>
  );
};
export default SignInPage;
