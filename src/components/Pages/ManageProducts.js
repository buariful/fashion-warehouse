import React from 'react';
import { useQuery } from 'react-query';
import ManageSingleProd from './ManageSingleProd';
import Loading from './Loading';

const ManageProducts = () => {
    const { isLoading, data } = useQuery('repoData', () =>
        fetch('https://desolate-reef-98176.herokuapp.com/products').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
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

                    {data.map(data => <ManageSingleProd product={data} key={data._id}></ManageSingleProd>)}
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
        </div>
    );
};

export default ManageProducts;