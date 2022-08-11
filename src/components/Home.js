import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import ChatPage from './ChatPage';
import Landing from './Landing';

const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className=' bg-blue-50'>
            {
                user ?
                    <ChatPage></ChatPage>
                    :
                    <Landing></Landing>
            }
        </div>
    );
};

export default Home;