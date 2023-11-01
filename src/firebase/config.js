// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYA5KVM_aGfX2rLCUcUxRXyCTIaTn_Jv4",
  authDomain: "auth-react-d5865.firebaseapp.com",
  projectId: "auth-react-d5865",
  storageBucket: "auth-react-d5865.appspot.com",
  messagingSenderId: "1004378359576",
  appId: "1:1004378359576:web:2eb4de8b3f611d3681406d",
  measurementId: "G-3GB12WF26V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)