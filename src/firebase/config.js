// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvHxuvai97dMU5T0W0g4uZ01ihB-nlRDQ",
  authDomain: "rj-technisys.firebaseapp.com",
  projectId: "rj-technisys",
  storageBucket: "rj-technisys.appspot.com",
  messagingSenderId: "967317428528",
  appId: "1:967317428528:web:83a71cdab3ca4766d5d0f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
