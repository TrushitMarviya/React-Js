// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_m8TkaRVqRZgHADFh5WzE6D_D92zp-vE",
  authDomain: "fir-project-2-bf24d.firebaseapp.com",
  projectId: "fir-project-2-bf24d",
  storageBucket: "fir-project-2-bf24d.firebasestorage.app",
  messagingSenderId: "1003652855645",
  appId: "1:1003652855645:web:15c384859b3452d037dab4",
  measurementId: "G-BTEN06ZEDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}