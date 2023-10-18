// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASd3S67O6912g01Z9XI_lGtj7DflRBZe0",
  authDomain: "altschool-exam-project-e0dc9.firebaseapp.com",
  projectId: "altschool-exam-project-e0dc9",
  storageBucket: "altschool-exam-project-e0dc9.appspot.com",
  messagingSenderId: "633420758289",
  appId: "1:633420758289:web:68ab06f8dc0adf9db460b0",
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()
