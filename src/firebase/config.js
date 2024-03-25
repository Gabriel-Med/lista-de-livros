import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlk7c42MMsEAYcS7bx9-qmPl1KBS0mnQE",
  authDomain: "lista-de-livros-com-firebase.firebaseapp.com",
  projectId: "lista-de-livros-com-firebase",
  storageBucket: "lista-de-livros-com-firebase.appspot.com",
  messagingSenderId: "70429373020",
  appId: "1:70429373020:web:353d541e784cd96e14ec99"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);