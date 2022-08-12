import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const Navbar = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='w-11/12 md:w-10/12  mx-auto py-4 flex justify-between'>
            <h2 className='text-xl lg:text-3xl'>React Chat App</h2>
            <ul>
                <li className='border-black border-b-2 lg:text-lg'>
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