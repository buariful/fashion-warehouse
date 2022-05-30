import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/solid'
import { useQuery } from 'react-query';
import Loading from './Loading';

const ManageSingleProd = ({ product, refetch, countProducts }) => {

    const errorBtn = () => {
        window.alert('Minimum 8 products need to delete a product')
    }
    const handleDelete = (props) => {
        const confirm = window.confirm(`R you sure to delete ${props.title}`)


        const propsProduct = {
            shipper: props.shipper,
            email: props.email,
            img: props.img,
            title: props.title,
            description: props.description,
            price: props.price,
            stock: props.stock,
            productId: props.productId
        }
        if (confirm) {
            fetch(`https://desolate-reef-98176.herokuapp.com/delete`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(propsProduct),
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        // if (confirm) {
        //     fetch(`http://localhost:5000/abc`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(propsProduct),
        //     })
        //         .then(res => res.json())
        //         .then(data => console.log(data))
        // }
        // refetch data of manageproducts data
        refetch()
    }

    return (


        <tbody>

            <tr>
                <th className='hidden sm:inline-block'>

                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={product.img} />
                            </div>
                        </div>

                    </div>
                </td>
                <td className='hidden sm:inline-block'>
                    {product.title}
                    <br />
                    <span className="badge badge-ghost badge-sm">{product.shipper}</span>
                </td>
                <td>{product.stock}</td>
                <td>$ {product.price}</td>
                <th>

                    {countProducts >= 8 ? <TrashIcon className="h-5 w-5 text-accent cursor-pointer" onClick={() => { handleDelete(product) }} /> : <TrashIcon className="h-5 w-5 text-accent cursor-pointer" onClick={errorBtn} />}

                </th>

            </tr>


        </tbody >




    );
};

export default ManageSingleProd;


// {/* <!-- Put this part before </body> tag --> */}
// <input type="checkbox" id="delete_product" class="modal-toggle" />
// <div class="modal">
//     <div class="modal-box relative">
//         <label htmlFor="delete_product" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//         <h3 class="text-lg font-bold text-primary">Are you sure to delete {product.title}</h3>
//         <p class="py-4">Shipper : {product.shipper}</p>
//         <img src={product.img} alt={product.title} />
//     </div>
// </div>
// <button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true"><TrashIcon className="h-5 w-5 text-accent cursor-pointer" onClick={errorBtn}