import { auth } from "./modules/firebase.js";
import { onAuthStateChanged } from "firebase/auth";


onAuthStateChanged(auth, (user)=>{
  if(user){
    console.log('good')
  }
  else {
    window.location.href = '/src/pages/login.html';
  }
})