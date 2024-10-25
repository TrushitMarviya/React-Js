// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYK-VZVykYrxg8bj_r-SlWerIn9JpjkRg",
  authDomain: "trail-project-ba593.firebaseapp.com",
  projectId: "trail-project-ba593",
  storageBucket: "trail-project-ba593.appspot.com",
  messagingSenderId: "921413294670",
  appId: "1:921413294670:web:e43dbdcde1af0a0828011f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}