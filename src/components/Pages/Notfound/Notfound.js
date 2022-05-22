import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Opps...! You are in the wrong place ...Go back to <Link to='/' className='text-orange-700 font-semibold'>Home</Link> </h1>
            <img src="https://i.ibb.co/c15vngw/depositphotos-45550465-stock-photo-cocktail-dog.webp" alt="404 page img" className='mx-auto' />
        </div>
    );
};

export default Notfound;