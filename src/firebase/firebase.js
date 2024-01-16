import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_OsSdyNG9BrUhrNBAc0URTvVH2jcOOY",
  authDomain: "challenge-65246.firebaseapp.com",
  projectId: "challenge-65246",
  storageBucket: "challenge-65246.appspot.com",
  messagingSenderId: "163982178564",
  appId: "1:163982178564:web:74273f661a178598b4b851",
  measurementId: "G-DKFW54TRWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};