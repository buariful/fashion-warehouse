import React from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Product = (props) => {
    const { name, products } = props.proData;
    return (
        <div className='md:flex items-center'>
            <h1 className='basis-1/5 font-bold text-2xl'>
                <span className='font-thin text-xl'>Shiper name: </span>
                {name}</h1>
            <div className="basis-4/5">
                <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-5'>
                    {products.map(product => <SingleProduct key={product.productId} product={product} shipper={name}></SingleProduct>)}
                </div>
            </div>
        </div>
    );
};

export default Product;