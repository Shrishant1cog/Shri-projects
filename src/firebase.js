
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔴 REPLACE ALL VALUES BELOW with your real config from Firebase console
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvTjs5mBvFW3J9ZrouI6juqnr8mY9FAi4",
  authDomain: "shri-1313f.firebaseapp.com",
  projectId: "shri-1313f",
  storageBucket: "shri-1313f.firebasestorage.app",
  messagingSenderId: "289024991612",
  appId: "1:289024991612:web:6f8831a56518cfe00e84f9",
  measurementId: "G-Z6Q5RSS1HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export auth + Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);