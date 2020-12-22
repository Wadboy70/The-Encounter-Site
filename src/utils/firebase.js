import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import USER_TIERS from './constants/userTiers';

export const COLLECTIONS = {
    USERS: 'users',
    CALENDAR: 'calendar',
    MENS_MINISTRY: 'MENS_MINISTRY',
    WOMENS_MINISTRY: 'WOMENS_MINISTRY',
    YOUTH_MINISTRY: 'YOUTH_MINISTRY',
    MUSIC_MINISTRY: 'MUSIC_MINISTRY',
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
const app = firebase.initializeApp(firebaseConfig);

const storageRef = app.storage().ref();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export const googleSignIn = async () =>  await auth.signInWithPopup(googleProvider).catch((error) => (error));
export const createPasswordAcc = async (email, password, name) => {
    return await auth.createUserWithEmailAndPassword(email, password)
    .then(async user => {
        await addNewUser({...user?.user, displayName: name})
        return user;
    })
    .catch((error) => (error));
}
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
        if (displayName && (displayName !== query.displayName)){
            await db.collection(COLLECTIONS.USERS).doc(uid).set({
                displayName
            }, {merge: true});
        } else if (!query.tier){
            await db.collection(COLLECTIONS.USERS).doc(uid).set({
                tier: user.tier
            }, {merge: true});
        }
    }
    else {
        console.log('making new user')
        await db.collection(COLLECTIONS.USERS).doc(uid).set(user);
    }
    return true;
};

export const getUserInfo = async (uid) =>  await db.collection(COLLECTIONS.USERS).doc(uid).get().then(doc => doc.data());

export const getAllUsers = async () => {
    const snapshot = await (db.collection(COLLECTIONS.USERS).get());
    return snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
};

export const updateUserDoc = async (uid, tier) => await db.collection(COLLECTIONS.USERS).doc(uid).set({tier}, {merge: true});

//calendar tings


export const updateEvent = async (id, event) => await db.collection(COLLECTIONS.CALENDAR).doc(id).set(event, {merge: true});

export const getAllDocs = async (collection, sortFunc) => {
    const snapshot = await (db.collection(collection).get());
    const docs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));
    return sortFunc ? docs.sort(sortFunc) : docs;
};

export const getUpcomingEvent = async () => {
    const snapshot = await (db.collection(COLLECTIONS.CALENDAR).get());
    return snapshot.docs[0]?.data() || null;
};

export const deleteDoc = async (id, collection) => await db.collection(collection).doc(id).delete(docRef => docRef);

export const addNewDoc = async (info = {}, collection = '') => {
    return db.collection(collection)
    .add(info)
    .then(docRef => {
        return docRef.id;
    })
    .catch(err => console.log("error adding document: ", err));
};

export const fileUpload = (file, name) => {
    const fileRef = storageRef.child(`titheInfo/${name}`);
    return fileRef.put(file).then(res => res).catch(err => err);
};

export const fileList = () => {
    const listRef = storageRef.child('titheInfo');
    return listRef.listAll().then(res => res);
};

export const deleteFile = (path) => {
    const listRef = storageRef.child(path);
    return listRef.delete().then(res => res).catch(err => err);
};

export const downloadFile = (path) => {
    return storageRef.child(path).getDownloadURL().then(url => url).catch(err => err);
}