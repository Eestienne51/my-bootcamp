// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRvO88TzUb7fnoIPZTuu0-NRFLtMPs_yA",
  authDomain: "ee-bootcamp-25.firebaseapp.com",
  projectId: "ee-bootcamp-25",
  storageBucket: "ee-bootcamp-25.firebasestorage.app",
  messagingSenderId: "37325716052",
  appId: "1:37325716052:web:de8884b53ed99e5c994bc1",
  measurementId: "G-VHTC8YRVHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
