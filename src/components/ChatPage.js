import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase.init';
import { collection, query, onSnapshot, orderBy, limit, getDocs } from "firebase/firestore"
import ChatBox from './ChatBox';

const ChatPage = () => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const allMessages = collection(db, 'messages');
        console.log(allMessages)
        const q = query(allMessages, orderBy('createAt'), limit(50));
        console.log(q)
        onSnapshot(q, snapshot => {
            console.log(snapshot)
            const msg = []
            setMessages(snapshot.docs.map((doc) => doc.data()))
            console.log(messages)
        })
    }, [])
    // console.log(messages)
    return (
        <div>
            {
                messages.map((message, index) => (
                    <div key={index}>
                        <img src={message.photoURL} alt="Profile Pic" />
                        <p> {message.text}</p>
                    </div>
                ))
            }

            <ChatBox />
        </div >
    );
};

export default ChatPage;