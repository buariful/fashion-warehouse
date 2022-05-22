import React from 'react';
import { useQuery } from 'react-query';
import Loading from './Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import ManageSingleProd from './ManageSingleProd';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://desolate-reef-98176.herokuapp.com/products').then(res =>
            res.json()
        )
    )

    if (isLoading) { return (<Loading></Loading>) }
    const myProducts = data.filter(data => data.email === user.email);

    return (
        <div className="overflow-x-auto sm:w-11/12">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product - Shipper</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>

                {myProducts.map(myProduct => <ManageSingleProd product={myProduct} key={myProduct._id}></ManageSingleProd>)}
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Product - Shipper</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>

        </div>
    );
};

export default MyItems;