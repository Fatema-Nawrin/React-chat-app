import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARAyaVknYo-AWlafMoBUCKau4Sbz_yGNU",
    authDomain: "react-chat-29361.firebaseapp.com",
    projectId: "react-chat-29361",
    storageBucket: "react-chat-29361.appspot.com",
    messagingSenderId: "719876349331",
    appId: "1:719876349331:web:0d15485a884089884f1c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };