import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [icon, setIcon] = useState(true);
    const iconChange = () => {
        setIcon(!icon)
    }

    const [user] = useAuthState(auth);
    // signout
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='bg-orange-500 sticky top-0 z-20'>

            <div className="w-11/12 mx-auto" >
                {icon ? <MenuIcon className='w-10 md:hidden cursor-pointer' onClick={iconChange}></MenuIcon> : <XIcon className='w-10 md:hidden cursor-pointer' onClick={iconChange}></XIcon>}


                <div className={`${icon ? "hidden" : "block"} md:flex justify-around items-center`}>

                    <div className='md:flex'>
                        <Link to='/home' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Home</Link>
                        <Link to='/Blog' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Blog</Link>

                        {user && <Link to='/manage-products' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Manage products</Link>}

                        {user && <Link to='/my-items' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>My items</Link>}

                        {user && <Link to='/add-items' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Add items</Link>}

                        {user ? <button className="btn my-6 bg-gray-700 text-white ml-3 md:ml-5 font-semibold" onClick={logout}>Sign Out</button> : <Link to='/login' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Login</Link>}

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;