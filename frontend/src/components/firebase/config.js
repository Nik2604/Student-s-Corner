// Import the functions you need from the SDKs you need
import app from 'firebase/app';
import firebase from 'firebase';

import 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt1MhqOyMGRd_B3Wak5FSFVddLLnHIlNY",
  authDomain: "campus-a8300.firebaseapp.com",
  projectId: "campus-a8300",
  storageBucket: "campus-a8300.appspot.com",
  messagingSenderId: "208234695060",
  appId: "1:208234695060:web:aafbe6c92f6378b5b5a781"
};

// Initialize Firebase  
const fb = app.initializeApp(firebaseConfig);

const firestore = fb.firestore();
const auth = firebase.auth();


export {fb, firestore, app, auth};