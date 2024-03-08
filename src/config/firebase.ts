// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0WY2iRS9RaSdaLps-9IkWon8859xFgt0",
  authDomain: "rproject1-6227b.firebaseapp.com",
  projectId: "rproject1-6227b",
  storageBucket: "rproject1-6227b.appspot.com",
  messagingSenderId: "372900159313",
  appId: "1:372900159313:web:09d830f827a31ad5a0bd70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);