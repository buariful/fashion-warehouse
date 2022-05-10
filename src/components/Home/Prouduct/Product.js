import React from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Product = (props) => {
    const { name, products } = props.proData;
    return (
        <div className='flex items-center'>
            <h1 className='basis-1/5 font-bold text-2xl'>{name}</h1>
            <div className="basis-4/5">
                <div className='grid grid-cols-3 gap-8'>
                    {products.map(product => <SingleProduct key={product.productId} product={product} shipper={name}></SingleProduct>)}
                </div>
            </div>
        </div>
    );
};

export default Product;