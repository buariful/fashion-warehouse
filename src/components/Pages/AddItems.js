import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import Loading from './Loading';

const AddItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({});
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://desolate-reef-98176.herokuapp.com/products').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const productId = data.map(data => parseInt(data.productId));
    const largestId = Math.max(...productId);
    const newProductId = largestId + 1;

    const handleAddProduct = async event => {
        event.preventDefault();

        const newProduct = {
            shipper: event.target.shipper.value,
            email: event.target.email.value,
            img: event.target.img.value,
            title: event.target.title.value,
            description: event.target.description.value,
            price: event.target.price.value,
            stock: event.target.stock.value,
            productId: event.target.productId.value,
        }
        fetch(`https:/desolate-reef-98176.herokuapp.com/upload`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => console.log(data))
        await navigate('/home');
    }
    return (
        <div>
            <h1 className='my-5'>Add items by given information below</h1>
            <form className='lg:w-8/12 mx-auto bg-base-200 py-5' onSubmit={handleAddProduct}>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Shipper</span>
                        <input type="text" placeholder='Shipper name' className="input input-bordered input-md focus:outline-none w-8/12" name='shipper' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Email</span>
                        <input type="text" value={user.email} disabled className="input input-bordered input-md focus:outline-none w-8/12" name='email' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Image</span>
                        <input type="text" placeholder="paste 292x292 img online url" className="input input-bordered input-md focus:outline-none w-8/12" name='img' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Title</span>
                        <input type="text" placeholder="Product title" className="input input-bordered input-md focus:outline-none w-8/12" name='title' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Description</span>
                        <input type="text" placeholder="Product description" className="input input-bordered input-md focus:outline-none w-8/12" name='description' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Price</span>
                        <input type="number" placeholder="$ product price" className="input input-bordered input-md focus:outline-none w-8/12" name='price' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Stock</span>
                        <input type="number" placeholder="stock" className="input input-bordered input-md focus:outline-none w-8/12" name='stock' />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group input-group-md justify-center w-full mx-auto">
                        <span>Product Id</span>
                        <input type="text" placeholder={newProductId} disabled className="input input-bordered input-md focus:outline-none w-8/12" name='productId' value={newProductId} />
                    </label>
                </div>
                <input type="submit" value="Add item" className='btn btn-secondary' />
            </form>
        </div>
    );
};

export default AddItems;