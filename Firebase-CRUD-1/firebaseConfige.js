// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm-gJVOkjesXgVPzqRy9pduwX_3Zt1C8E",
  authDomain: "crud-1-6d0a8.firebaseapp.com",
  projectId: "crud-1-6d0a8",
  storageBucket: "crud-1-6d0a8.firebasestorage.app",
  messagingSenderId: "984425359753",
  appId: "1:984425359753:web:c28c7500010fa476f65958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}