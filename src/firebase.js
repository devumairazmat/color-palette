// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrsSIYR0oA6fMvIAvz6bXpq6C5IqJLFZ0",
  authDomain: "color-pallete-13ff3.firebaseapp.com",
  projectId: "color-pallete-13ff3",
  storageBucket: "color-pallete-13ff3.appspot.com",
  messagingSenderId: "1052806126952",
  appId: "1:1052806126952:web:549971fb47b5b73458cadd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();