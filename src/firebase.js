import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB18WTR1v36GSOp_2eTHgrTwu4GsGTh31A",
    authDomain: "eventchat01.firebaseapp.com",
    projectId: "eventchat01",
    storageBucket: "eventchat01.appspot.com",
    messagingSenderId: "724733319008",
    appId: "1:724733319008:web:e638a8afcfd9d54861b005",
    measurementId: "G-LER7GHJEQ8"
  })



const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
