import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const ProductDeatail = () => {
    const [increaseQuantity, setIncreaseQuantity] = useState('')
    const { details } = useParams();
    const { isLoading, data, refetch } = useQuery('repoData', () =>
        fetch('https://desolate-reef-98176.herokuapp.com/products').then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <button className="btn loading" > loading</button >
    }
    const product = data.find(data => data.productId === details);

    const deliveredStock = parseInt(product.stock) - 1;

    const handleDeliver = (quantity) => {
        const updateProduct = {
            description: product.description,
            email: product.email,
            img: product.img,
            price: product.price,
            productId: product.productId,
            shipper: product.shipper,
            stock: quantity,
            title: product.title,

        }

        fetch(`http://localhost:5000/update/${product.productId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        })
        refetch()
    }
    const handelIncreaseQuantity = (event) => {
        event.preventDefault();
        const increasingQuantity = parseInt(increaseQuantity) + parseInt(product.stock);
        handleDeliver(increasingQuantity);
        setIncreaseQuantity('')
        refetch()
    }
    return (
        <div>
            <h1 className='font-bold text-3xl mt-6'>Details of your choosen product. {product.title} </h1>
            <div className="hero bg-base-200 lg:w-8/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={product.img} className="max-w-sm rounded-lg shadow-2xl" alt={product.title} />
                    <div className='lg:text-left'>
                        <h1 className="text-5xl font-bold">{product.title}</h1>
                        <p className="py-6">{product.description}</p>
                        <h3>Shipper : <span className='font-semibold text-primary'>{product.shipper}</span></h3>
                        <h2 className='text-xl'>Stock : <span className='font-bold'>{product.stock}</span></h2>
                        <h1>Price : <span className='text-4xl font-bold'>$ {product.price}</span></h1>
                        <button className='btn btn-primary mt-5' onClick={() => { handleDeliver(deliveredStock) }}>Delivered</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-8/12 mx-auto bg-base-200 py-4 px-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Increase {product.title} quantity</span>
                    </label>
                    <div className="flex w-full justify-between">

                        <form onSubmit={handelIncreaseQuantity}>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" name='quantity' onChange={event => setIncreaseQuantity(event.target.value)}
                                value={increaseQuantity}
                            />
                            <input type="submit" value="Increase" className='btn btn-primary' />
                        </form>
                    </div>
                </div>
            </div>
            <Link to='/my-items' className='btn btn-primary my-5'>Manage my Items</Link>
        </div>
    );
};


export default ProductDeatail;