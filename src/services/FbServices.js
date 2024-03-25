// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdgyQpQQp2CFyanaUc37XqUs8AXSAFjL8",
  authDomain: "paperless-hospital-servi-e34f8.firebaseapp.com",
  projectId: "paperless-hospital-servi-e34f8",
  storageBucket: "paperless-hospital-servi-e34f8.appspot.com",
  messagingSenderId: "465140594106",
  appId: "1:465140594106:web:e33b276b4042b47b9b5983",
  measurementId: "G-GZBCVY0XPJ"
};

const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
