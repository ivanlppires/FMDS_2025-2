// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEsiJ33LzmmiPbANEDxUnWl5Q0BDvIZ9g",
  authDomain: "fmds-auth.firebaseapp.com",
  projectId: "fmds-auth",
  storageBucket: "fmds-auth.firebasestorage.app",
  messagingSenderId: "808178745357",
  appId: "1:808178745357:web:a23a61cf25754484eed544"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;