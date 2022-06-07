import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDwcCjtYYE1oExnqxYqs0FvasyZQenJXwc",
    authDomain: "tugas-akhir-pbf.firebaseapp.com",
    projectId: "tugas-akhir-pbf",
    storageBucket: "tugas-akhir-pbf.appspot.com",
    messagingSenderId: "547000356408",
    appId: "1:547000356408:web:08957634b21a76cf1c60cd",
    measurementId: "G-HPJNR37QL0"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;