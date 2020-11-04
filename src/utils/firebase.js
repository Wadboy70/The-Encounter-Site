import firebase from "firebase/app";

import "firebase/auth";
// import "firebase/firestore";

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const googleSignIn = async () =>  await auth.signInWithPopup(googleProvider).catch((error) => (error));
export const createPasswordAcc = async (email, password) => await auth.createUserWithEmailAndPassword(email, password).catch((error) => (error));
export const passwordSignIn = async (email, password) =>  await auth.signInWithEmailAndPassword(email, password).catch((error) =>  (error));
export const passwordReset = async (email) =>  await auth.sendPasswordResetEmail(email).catch((error) =>  (error));
export const passwordUpdate = async (password) =>  await auth.currentUser.updatePassword(password).catch((error) =>  (error));
export const signOut = () =>  auth.signOut();
