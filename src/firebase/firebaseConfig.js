import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const FirebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-3guBrFpaKJgGDYLc59yTqzM9xmRvgQI",
    authDomain: "prueba-tecnica-93807.firebaseapp.com",
    databaseURL: "https://prueba-tecnica-93807.firebaseio.com",
    projectId: "prueba-tecnica-93807",
    storageBucket: "prueba-tecnica-93807.appspot.com",
    messagingSenderId: "372531474067",
    appId: "1:372531474067:web:6b6b3c8c87e66f39b72766",
    measurementId: "G-QR4628462V"
});

export const auth = FirebaseApp.auth();
export const db = FirebaseApp.firestore();
export default FirebaseApp;