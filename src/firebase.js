import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDZIkjYxJbg4evHrd5A0T5rSuV9Lar3E4U",
  authDomain: "firestore-test-ce71d.firebaseapp.com",
  projectId: "firestore-test-ce71d",
  storageBucket: "firestore-test-ce71d.firebasestorage.app",
  messagingSenderId: "735246380229",
  appId: "1:735246380229:web:f81579da2964539e1254ac",
  measurementId: "G-T1PVQLG0PE"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export { db }