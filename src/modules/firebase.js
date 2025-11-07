// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZIkjYxJbg4evHrd5A0T5rSuV9Lar3E4U",
  authDomain: "firestore-test-ce71d.firebaseapp.com",
  projectId: "firestore-test-ce71d",
  storageBucket: "firestore-test-ce71d.firebasestorage.app",
  messagingSenderId: "735246380229",
  appId: "1:735246380229:web:f81579da2964539e1254ac",
  measurementId: "G-T1PVQLG0PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {
    app, 
    auth,
}