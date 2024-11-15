// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvdKNcGMx0RJqKxOTyWqOF3eTEqY7TLyA",
  authDomain: "crud-project-1450e.firebaseapp.com",
  projectId: "crud-project-1450e",
  storageBucket: "crud-project-1450e.firebasestorage.app",
  messagingSenderId: "657704178054",
  appId: "1:657704178054:web:314d7e9f933e7dfc055c07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}