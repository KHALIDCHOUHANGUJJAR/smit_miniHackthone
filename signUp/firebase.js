import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
    getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged, 
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCbNZb6KtNfj9EkQ_JJmiqsDREWCHy8_BU",
  authDomain: "minihackthone-8e283.firebaseapp.com",
  projectId: "minihackthone-8e283",
  storageBucket: "minihackthone-8e283.appspot.com",
  messagingSenderId: "880841340414",
  appId: "1:880841340414:web:025e09441f55055c7dbcaf",
  measurementId: "G-E9L865YGHQ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged   };
