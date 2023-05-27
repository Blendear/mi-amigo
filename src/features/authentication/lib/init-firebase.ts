//
//~~ _. Initialize Firestore (Database, optimize dversion of Firebae Realtime DB), and its parent - Firebase [VERSION 9.1.1] (Google's technology for working with backend and db)
//
//       _._. Import Firebase App & Firestore DB
//
//       _._. Configure Firebase App with your personal "security strings"
//
//       _._. Initialize (create a connection with) Firebase App & Firestore DB   &   Export Firestore DB for "talking with it with CRUD requests" later on
//
//       _._. [INSIDE "pages/api/auth/[[...nextauth].tsx"] Add a "secret" , so that Next.js doesnt block firebase and other authenticated apps in porduction (when the app goes live)
//

//
//       _._. Import Firebase App & Firestore
//
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

//
//       _._. Configure Firebase App with your personal "security strings"
//
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

//
//       _._. Initialize (create a connection with) Firebase App & Firestore DB   &   Export Firestore DB for "talking with it with CRUD requests" later on
//
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//hook1 - delete ".env.loca."" file from "add to github". seucrity passdwords are there
