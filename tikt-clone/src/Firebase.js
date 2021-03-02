// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb0j_U0nHBPLulspbNW2lC7XWUJHOjZEU",
  authDomain: "tik-tok-clone-1ee5d.firebaseapp.com",
  projectId: "tik-tok-clone-1ee5d",
  storageBucket: "tik-tok-clone-1ee5d.appspot.com",
  messagingSenderId: "1035042677862",
  appId: "1:1035042677862:web:8ba32105ef8ad997c4f9a7",
  measurementId: "G-P8PB1PR6VD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
