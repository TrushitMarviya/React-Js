// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQo2schB5-FzbmU3hVXtcQJPfvXNV502A",
  authDomain: "auth-a467c.firebaseapp.com",
  projectId: "auth-a467c",
  storageBucket: "auth-a467c.firebasestorage.app",
  messagingSenderId: "846276025869",
  appId: "1:846276025869:web:85bf51653859996cacbf44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider ; 
export { auth, provider };