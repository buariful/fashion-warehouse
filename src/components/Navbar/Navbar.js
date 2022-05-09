import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [icon, setIcon] = useState(true);
    const iconChange = () => {
        setIcon(!icon)
    }
    return (
        <div className='bg-orange-500 sticky top-0'>

            <div className="w-11/12 mx-auto" >
                {icon ? <MenuIcon className='w-10 md:hidden' onClick={iconChange}></MenuIcon> : <XIcon className='w-10 md:hidden' onClick={iconChange}></XIcon>}


                <div className={`${icon ? "hidden" : "block"} md:flex justify-around items-center`}>

                    <div className='md:flex'>
                        <Link to='/home' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Home</Link>
                        <Link to='/Blog' className='block py-8 text-white ml-3 md:ml-5 font-semibold'>Blog</Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Navbar;