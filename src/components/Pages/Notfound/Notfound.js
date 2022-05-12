import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img src="" alt="" />
            <h1>Opps...! You are in the wrong place ...Go back to <Link to='/' className='text-orange-700 font-semibold'>Home</Link> </h1>
        </div>
    );
};

export default Notfound;