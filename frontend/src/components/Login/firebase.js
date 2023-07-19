import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBt1MhqOyMGRd_B3Wak5FSFVddLLnHIlNY",
  authDomain: "campus-a8300.firebaseapp.com",
  projectId: "campus-a8300",
  storageBucket: "campus-a8300.appspot.com",
  messagingSenderId: "208234695060",
  appId: "1:208234695060:web:aafbe6c92f6378b5b5a781"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;