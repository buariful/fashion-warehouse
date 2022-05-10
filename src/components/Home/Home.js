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

                {/* product-------- */}
                <div>
                    {products.map(product => <Product key={product.id} proData={product}></Product>)}
                </div>

                {/* Brand----- */}
                <h1 className='text-center font-bold text-4xl mt-12 mb-8'> Our <span className="text-orange-500">Brands</span></h1>
                <div className="grid md:grid-cols-4  w-9/12 mx-auto">
                    <img src="https://i.ibb.co/tHPKG7Y/client3.jpg" alt="" className='mx-auto mb-3' />
                    <img src="https://i.ibb.co/nrn06rS/client2.jpg" alt="" className='mx-auto mb-3' />
                    <img src="https://i.ibb.co/947Vbv5/logo.png" alt="" className='mx-auto mb-3' />
                    <img src="https://i.ibb.co/khBqChJ/Untitled-2.jpg" alt="" className='mx-auto mb-3' />
                </div>


            </div>
        </div>
    );
};

export default Home;