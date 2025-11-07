import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const button = document.getElementById('googlebtn');

button.addEventListener('click', ()=>{
    signInWithPopup(auth, provider);
})