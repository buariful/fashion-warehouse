import React from 'react';

const SingleProduct = (props) => {
    const { shipper } = props;
    const { img, title, description, price, stock } = props.product;
    return (
        <div className='bg-orange-200 mt-10 text-left'>
            <img src={img} alt="" className='mx-auto' />
            <h3 className='text-2xl font-semibold'>{title} </h3>
            <p>{description}</p>
            <h4 className='text-2xl font-bold'>$ {price}</h4>
            <small>Shipper : {shipper}</small>
        </div>
    );
};

export default SingleProduct;