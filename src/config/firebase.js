// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrWZ8PNHus1iTjClxRL24dYTiigdcL32M",
  authDomain: "auth-5-fa682.firebaseapp.com",
  projectId: "auth-5-fa682",
  storageBucket: "auth-5-fa682.appspot.com",
  messagingSenderId: "139659251209",
  appId: "1:139659251209:web:98c894c2ffebac1635b2d8",
  measurementId: "G-ZJJ90NL3T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
