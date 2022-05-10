import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { shipper } = props;
    const { img, title, description, price, stock } = props.product;
    return (
        <div className='bg-orange-200 mt-10 text-left px-6 py-5 rounded-lg'>
            <img src={img} alt="" className='mx-auto rounded-md' />
            <h3 className='text-xl mt-4 font-semibold'>{title} </h3>
            <p className='my-3'>{description}</p>
            <h4 className='text-2xl font-bold'>$ {price}</h4>
            <p className='font-semibold'>Stock : {stock}</p>
            <Link to='/blog' className='block bg-orange-600 rounded-md text-center text-white mt-4 py-2'>Buy</Link>
        </div>
    );
};

export default SingleProduct;