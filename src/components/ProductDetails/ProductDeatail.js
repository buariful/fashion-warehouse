import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ProductDeatail = () => {
    const [productDetails, setProductDetails] = useState([])
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

    // =============================================================
    // =============================================================
    // ekhane kaj baki ase .chaile ei section delete kore dite paro...f
    // prothome procuct delete korbo bd theke . then stock quantity baraya post korbo
    const handleDeliver = () => {
        const deleteCurrentProduct = () => {
            const productInfo = {
                shipper: product.shipper,
                email: product.email,
                img: product.img,
                title: product.title,
                description: product.description,
                price: product.price,
                stock: product.stock,
                productId: product.productId
            }
            fetch(`https://desolate-reef-98176.herokuapp.com/delete`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productInfo),
            })
                .then(res => res.json())
                .then(data => setProductDetails(data))

        }


    }
    // ============================================
    // ============================================
    // console.log(parseInt(product.stock) + 1)
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
                        <button className='btn btn-primary mt-5' onClick={handleDeliver}>Delivered</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-8/12 mx-auto bg-base-200 py-4 px-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Increase {product.title} quantity</span>
                    </label>
                    <div className="flex w-full justify-between">

                        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <button className='btn btn-primary'>Increase</button>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary my-5'>Manage my Items</button>
        </div>
    );
};


export default ProductDeatail;