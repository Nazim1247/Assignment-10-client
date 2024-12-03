// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdR5_qAp4LyZjpqLIYIr1VbXQ8VMM7E1A",
  authDomain: "my-assignment-10-7291e.firebaseapp.com",
  projectId: "my-assignment-10-7291e",
  storageBucket: "my-assignment-10-7291e.firebasestorage.app",
  messagingSenderId: "968117483440",
  appId: "1:968117483440:web:edf6c0871ac55dec07c875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);