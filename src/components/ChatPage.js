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
        <div className='w-full'>
            <div className='flex flex-col w-11/12 mx-auto pb-16'>
                {
                    messages.map((message, index) => (
                        <div key={index} className={`flex  ${message.uid === auth.currentUser.uid ? 'sentMsgs' : 'receivedMsgs'}`}>

                            <div className={`flex items-center w-fit max-w-lg items  p-2 rounded-lg my-4 shadow-xl bg-white  ${message.uid === auth.currentUser.uid ? 'sentMsgs' : 'receivedMsgs'}`}>

                                <img className='rounded-full w-12 h-12' src={message.photoURL} alt="Pic" />

                                <p className='px-3'> {message.text}</p>

                                {message.image ?
                                    <img className='w-30 h-24 m-2' src={message?.image} alt=''></img>
                                    :
                                    null
                                }
                            </div>
                        </div>

                    ))
                }
            </div>
            <ChatBox />
        </div >
    );
};

export default ChatPage;