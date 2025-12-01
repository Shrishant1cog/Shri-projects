// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔴 REPLACE ALL VALUES BELOW with your real config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyABCD123",
  authDomain: "shristore-12345.firebaseapp.com",
  projectId: "shristore-12345",
  storageBucket: "shristore-12345.appspot.com",
  messagingSenderId: "9876543210",
  appId: "1:9876543210:web:xyz123",
};


// ✅ Initialize app once
const app = initializeApp(firebaseConfig);

// ✅ Export auth + Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
