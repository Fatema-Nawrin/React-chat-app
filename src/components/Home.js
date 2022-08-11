import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import ChatPage from './ChatPage';

const Home = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            {/* <Login></Login> */}
            {
                user ?
                    <ChatPage></ChatPage>
                    :
                    <div>Home</div>
            }
        </div>
    );
};

export default Home;