import React, { useState } from 'react';
import { useEffect } from 'react';
import { db, auth } from '../firebase.init';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore"
import ChatBox from './ChatBox';
import "./ChatPage.css"

const ChatPage = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const allMessages = collection(db, 'messages');
        const q = query(allMessages, orderBy('createAt'), limit(50));
        onSnapshot(q, snapshot => {
            setMessages(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return (
        <div className='msgs'>
            {
                messages.map((message, index) => (
                    <div key={index} className={`chatLine ${message.uid === auth.currentUser.uid ? 'sentMsgs' : 'receivedMsgs'}`}>
                        <img src={message.photoURL} alt="Pic" />
                        <p> {message.text}</p>
                        <img src={message?.image}></img>
                    </div>
                ))
            }

            <ChatBox />
        </div >
    );
};

export default ChatPage;