// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy2Q2hxYOWpMinToKxNSitXAzhT__Ynt4",
  authDomain: "grommingargentina.firebaseapp.com",
  projectId: "grommingargentina",
  storageBucket: "grommingargentina.appspot.com",
  messagingSenderId: "553707931636",
  appId: "1:553707931636:web:ffd438989d1d766ec1dba1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();