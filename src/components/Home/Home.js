import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Prouduct/Product';


const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    return (
        <div >
            <div className='home'></div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-center font-bold text-4xl mt-12 mb-8'> Our <span className="text-orange-500">Prouducts</span></h1>


                <div>
                    {products.map(product => <Product key={product.id} proData={product}></Product>)}
                </div>

            </div>
        </div>
    );
};

export default Home;