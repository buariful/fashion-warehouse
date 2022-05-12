import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDeatail = (id) => {
    const [productInfo, setProductInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/product.json'
        )
            .then(res => res.json())
            .then(data => setProductInfo(data))
    });

    const { details } = useParams();

    const product = productInfo.find(info => info.productId === details);
    const { shipper, img, title, description, } = product;
    return (
        <div>
            <h1 className='font-bold text-3xl my-6'>Details of your choosen product. {description} </h1>
        </div>
    );
};

export default ProductDeatail;