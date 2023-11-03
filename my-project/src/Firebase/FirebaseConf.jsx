// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6ZxID0Oruoc7XN_OvNJUS087MABmqUIo",
  authDomain: "authcontext-a4b29.firebaseapp.com",
  projectId: "authcontext-a4b29",
  storageBucket: "authcontext-a4b29.appspot.com",
  messagingSenderId: "1036999790400",
  appId: "1:1036999790400:web:28578dae5954496db2b4a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
