// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfRjnVRqD7bHaVBKtc1F4987HG7JzYS-s",
  authDomain: "gym-trainer-44ce8.firebaseapp.com",
  projectId: "gym-trainer-44ce8",
  storageBucket: "gym-trainer-44ce8.appspot.com",
  messagingSenderId: "1033382484361",
  appId: "1:1033382484361:web:f4b0b8a580da1e33f82958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
