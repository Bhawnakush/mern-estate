// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e30d0.firebaseapp.com",
  projectId: "mern-estate-e30d0",
  storageBucket: "mern-estate-e30d0.appspot.com",
  messagingSenderId: "360885216059",
  appId: "1:360885216059:web:3f6626fce06b78dd524d1e"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);