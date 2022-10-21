import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDv85iESkyIqWuf9beYKKLzuWa9V7977Nc",
  authDomain: "criarpost-67a05.firebaseapp.com",
  projectId: "criarpost-67a05",
  storageBucket: "criarpost-67a05.appspot.com",
  messagingSenderId: "639535708147",
  appId: "1:639535708147:web:d4057cfad1528290478486",
  measurementId: "G-W8QMCGPR16"
};


export const inciar = initializeApp(firebaseConfig);
export const autenticar = getAuth(inciar)
export const db = getFirestore(inciar)
export const provider = new GoogleAuthProvider()