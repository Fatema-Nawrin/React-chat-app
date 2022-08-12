import React from 'react';
import { useState } from 'react';
import { auth, db, storage } from '../firebase.init';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import './ChatBox.css'

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
        if (file === '') {
            const { uid, photoURL } = auth.currentUser;
            await addDoc(collection(db, 'messages'), {
                createAt: serverTimestamp(),
                photoURL,
                text: msg,
                uid,
            })
        }
        else {
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
        }
        setMsg('')
        setFile('')
        event.target.reset()
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='w-full fixed flex justify-center bottom-0 p-3 bg-slate-50 shadow-2xl'>
            <form onSubmit={sendMsg}>
                <div className='flex items-center'>
                    <label for="fileInput">
                        <img src="https://image.freepik.com/free-icon/upload-arrow_318-26670.jpg" className='h-6 px-2' alt='' />
                    </label>
                    <input id="fileInput" type="file" onChange={onFileChange} />
                    <input className="p-3 w-full lg:w-96 border-slate-600 border-2" placeholder='Write here' onChange={e => setMsg(e.target.value)}></input>
                    <button className='px-2' type='submit'>Send</button>
                </div>
            </form>

        </div>
    );
};

export default ChatBox;