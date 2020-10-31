import firebase from "firebase/app";

import "firebase/auth";
// import "firebase/firestore";

const auth = firebase.auth();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBm8Z06x5yNc8Qv-Yurrrz4hY8qlG_gq-Y",
    authDomain: "the-encounter-454ba.firebaseapp.com",
    databaseURL: "https://the-encounter-454ba.firebaseio.com",
    projectId: "the-encounter-454ba",
    storageBucket: "the-encounter-454ba.appspot.com",
    messagingSenderId: "46213323217",
    appId: "1:46213323217:web:4d200d9f86da1f0a1d28f0",
    measurementId: "G-TRSM3PMJZL"
};
  
//Create Paassword Based Account
//TODO - make complexity requirement regex in the utils folder
//TODO - return the result from a successful account creation
export const createPasswordAcc = (email, password) => {
    auth().createUserWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        console.log(error.code, error.message);
    // ...
    });
}
export const passwordSignIn = (email, password) => {
    auth().signInWithEmailAndPassword(email, password).catch((error) => {
        // Handle Errors here.
        console.log(error.code, error.message);
      });
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);