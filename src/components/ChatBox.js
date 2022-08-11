import React from 'react';
import { useState } from 'react';
import { auth, db } from '../firebase.init';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import firebase from 'firebase'

const ChatBox = () => {
    const [msg, setMsg] = useState('')

    const sendMsg = async event => {
        event.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: msg,
            uid,
            photoURL,
            createAt: serverTimestamp()
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMsg}>
                <input placeholder='Write here' onChange={e => setMsg(e.target.value)} className=''></input>
                <button type='submit'>Send</button>
            </form>


        </div>
    );
};

export default ChatBox;