// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIi2lRVb1v6k5C61pG1MEj1bCje_yu-wc",
  authDomain: "shri-projects.firebaseapp.com",
  projectId: "shri-projects",
  storageBucket: "shri-projects.appspot.com",
  messagingSenderId: "143635503612",
  appId: "1:143635503612:web:df0b1032ec30d242aaba79",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
