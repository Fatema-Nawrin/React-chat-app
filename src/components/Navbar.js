import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase.init';

const Navbar = () => {
    const [signInWithGoogle, loading] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <ul>
                <li>
                    {user ?
                        <button onClick={logout} className=''>Sign out</button>
                        :
                        <button onClick={() => signInWithGoogle()}>Login with Google</button>
                    }
                </li>

            </ul>

        </div>
    );
};

export default Navbar;