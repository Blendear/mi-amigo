// dedicated folder for livraries, becuase we make a "fasade", so that we only update libraries in one place, instead of all 0over out files

// explained here : https://www.youtube.com/watch?v=fHPa5xzbpaA&ab_channel=WebDevSimplified

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// // if already initialized, use that initializedone (otheriwse revisiting the starting page, which uses this code too, would fire up initalizing every time)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
//hook1 - delete ".env.local" file from "add to github". seucrity passdwords are there
