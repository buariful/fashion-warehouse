import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProductDeatail = () => {
    const { details } = useParams();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('http://localhost:5000/products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <button className="btn loading" > loading</button >
    }
    const product = data.find(data => data.productId === details);



    return (
        <div>
            <h1 className='font-bold text-3xl my-6'>Details of your choosen product. {details} </h1>
            <div className="hero min-h-screen bg-base-200 lg:w-8/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={product.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:text-left'>
                        <h1 className="text-5xl font-bold">{product.title}</h1>
                        <p className="py-6">{product.description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDeatail;