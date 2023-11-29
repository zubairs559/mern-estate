// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5f803.firebaseapp.com",
  projectId: "mern-estate-5f803",
  storageBucket: "mern-estate-5f803.appspot.com",
  messagingSenderId: "701482236294",
  appId: "1:701482236294:web:0474bd66ce2aedfbc19407"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);