// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdteSKAv-FSMmoqTPrC2F70jikecKaYhE",
  authDomain: "dev-stevensolis.firebaseapp.com",
  projectId: "dev-stevensolis",
  storageBucket: "dev-stevensolis.appspot.com",
  messagingSenderId: "524907430969",
  appId: "1:524907430969:web:c17e77cd8812eb387e39e8",
  measurementId: "G-M5T68BBGP2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app);


