import React from 'react';
import { useState } from 'react';
import { auth, db, storage } from '../firebase.init';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const ChatBox = () => {
    const [msg, setMsg] = useState('')
    const [file, setFile] = useState('');
    const onFileChange = e => {
        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const sendMsg = async event => {
        event.preventDefault();
        // const storageRef = storage.ref()
        const fileRef = ref(storage, (file.name))
        await uploadBytesResumable(fileRef, file);
        const { uid, photoURL } = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            createAt: serverTimestamp(),
            photoURL,
            text: msg,
            uid,
            image: await getDownloadURL(fileRef)
        })
        setMsg('')
    }
    return (
        <div>
            <form onSubmit={sendMsg}>
                <input type="file" onChange={onFileChange} />
                <input placeholder='Write here' onChange={e => setMsg(e.target.value)} className=''></input>
                <button type='submit'>Send</button>
            </form>


        </div>
    );
};

export default ChatBox;