import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import USER_TIERS from './constants/userTiers';

const COLLECTIONS = {
    USERS: 'users'
}
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

//firestore tings
const db = firebase.firestore();

export const addNewUser = async (userInfo) => {
    const { displayName, email, uid } = userInfo;
    const user = {
        displayName,
        email,
        date: new Date(),
        tier: USER_TIERS.MEMBER
    };
    const query = await db.collection(COLLECTIONS.USERS).doc(uid).get().then(doc => doc.data());
    if(query){
        if (displayName !== query.displayName){
            db.collection(COLLECTIONS.USERS).doc(uid).set({
                displayName
            }, {merge: true});
        } else if (!query.tier){
            db.collection(COLLECTIONS.USERS).doc(uid).set({
                tier: user.tier
            }, {merge: true});
        }
    }
    else {
        db.collection(COLLECTIONS.USERS).doc(uid).set(user);
    }
};

export const getUserInfo = async (uid) =>  await db.collection(COLLECTIONS.USERS).doc(uid).get().then(doc => doc.data());

export const getAllUsers = async () => {
    const snapshot = await (db.collection(COLLECTIONS.USERS).get());
    return snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
};

export const updateUserDoc = async (uid, tier) => await db.collection(COLLECTIONS.USERS).doc(uid).set({tier}, {merge: true});