import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = (props) => {
    const { img, title, description, price, stock, productId, shipper } = props.proData;
    const navigate = useNavigate();

    const productDetails = props => {
        navigate(`/productdetails/${props}`)

    }


    return (
        <div className='md:basis-1/3 mt-5'>
            <div className='w-2/3 bg-orange-200 mt-10 text-left px-6 py-5 rounded-lg m-auto'>
                <img src={img} alt="" className='mx-auto rounded-md' />
                <h3 className='text-xl mt-4 font-semibold'>{title} </h3>
                <p className='my-3'>{description}</p>
                <h4 className='text-2xl font-bold'>$ {price}</h4>
                <p className='font-semibold'>Stock : {stock}</p>
                <small>Shipper : {shipper}</small>
                <button className=' bg-orange-600 rounded-md text-center text-white mt-4 py-2 w-full' onClick={() => { productDetails(productId) }}>Update</button>

            </div>
        </div>
    );
};

export default Product;