// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMUyDW62946Q12FcGpfmdAqxgTCEbvuVw",
  authDomain: "aula2-5aba6.firebaseapp.com",
  projectId: "aula2-5aba6",
  storageBucket: "aula2-5aba6.appspot.com",
  messagingSenderId: "1046713973621",
  appId: "1:1046713973621:web:0baf400df35dfb055d713c",
  measurementId: "G-M9FGD539RR"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

export default Firebase;
