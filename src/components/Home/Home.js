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
            <div className='banner'></div>
            <div className='w-11/12 mx-auto'>
                <h1 className='text-center font-bold text-4xl mt-12 mb-8'> Our <span className="text-orange-500">Prouducts</span></h1>

                {/* product-------- */}
                <div className='flex items-center flex-row flex-wrap'>
                    {products.map(product => <Product key={product.productId} proData={product}></Product>)}
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
            <div className="bg-orange-200 py-5 location mx-auto mt-8 md:flex justify-around items-center">
                <div>
                    <img src="https://i.ibb.co/9VZQhGZ/logo.png" alt="" />
                </div>
                <div className='text-center'>
                    <h1 className='font-semibold text-2xl '>Find us</h1>
                    <div className='text-left'>
                        <p>Phone : <span className='font-semibold'>01234568</span></p>
                        <p>Email : <span className='font-semibold'>abcextra@gmail.com</span></p>
                        <p>Address : <span className='font-semibold'>12/13 lake road , Dhanmondi, Dhaka-1205</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;