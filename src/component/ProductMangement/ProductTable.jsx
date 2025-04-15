import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3> Product: {products.length} </h3>
            <table style={{border: '1px solid black'}}>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => 
                            <tr key={index}>
                                <td> {index + 1} </td>
                                <td> {product.name} </td>
                                <td> {product.price}  </td>
                                <td> {product.quantity}  </td>
                                <td> <button>Buy Now</button> </td>
                            </tr>
                         )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;