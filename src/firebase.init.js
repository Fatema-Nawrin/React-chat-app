import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//  web app's Firebase configuration
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
const storage = getStorage(app)
export { auth, db, storage };