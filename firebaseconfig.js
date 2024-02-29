// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB41g_5Re22wYUL4f_VtwqFuLLUeBmpV1o",
  authDomain: "shopping-app-54448.firebaseapp.com",
  projectId: "shopping-app-54448",
  storageBucket: "shopping-app-54448.appspot.com",
  messagingSenderId: "898796623095",
  appId: "1:898796623095:web:4de4ea28b98ca8aa52aff2",
  measurementId: "G-6S2015XGE2"
};

// Initialize Firebase


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
