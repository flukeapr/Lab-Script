// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zqexIWdIFmqBmU94brchczzpyEgy_8s",
  authDomain: "lab-firebase-8c3a5.firebaseapp.com",
  projectId: "lab-firebase-8c3a5",
  storageBucket: "lab-firebase-8c3a5.appspot.com",
  messagingSenderId: "105567302475",
  appId: "1:105567302475:web:7ca69d0ae5264b0b31aece",
  measurementId: "G-S5X3J07BF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);