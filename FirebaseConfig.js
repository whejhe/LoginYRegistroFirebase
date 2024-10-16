// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAffa0J-TDEMlpKgCIiu7nsmbfpEskMAKM",
    authDomain: "loginyregistrofirebase-69e4a.firebaseapp.com",
    projectId: "loginyregistrofirebase-69e4a",
    storageBucket: "loginyregistrofirebase-69e4a.appspot.com",
    messagingSenderId: "653422839742",
    appId: "1:653422839742:web:cc5301107a14b237b2dbef",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
