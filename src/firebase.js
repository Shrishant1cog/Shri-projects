// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIi2lRVb1v6k5C61pG1MEj1bCje_yu-wc",
  authDomain: "shri-projects.firebaseapp.com",
  projectId: "shri-projects",
  storageBucket: "shri-projects.firebasestorage.app",
  messagingSenderId: "143635503612",
  appId: "1:143635503612:web:df0b1032ec30d242aaba79",
  measurementId: "G-1TRY44YY8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);          // <-- REQUIRED
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)