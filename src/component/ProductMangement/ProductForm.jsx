import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('')
    const handleProductSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        console.log(name, price, quantity);

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);




        if (name.length === 0) { 
            setError('Please Provide e Product Name');
            return;
        }
        else if(price < 0){
            setError('Please Provide a posetive product  name');
            return
        }
        else if(price.lenght === 0) {
            setError('Plaease provide e product price');
            return
        }
        else{
            setError('');
        }
        
        handleAddProduct(newProduct);
    }
    return (
        <div>
            <h3>Add your Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='Product Er Name' />
                <br />
                <input type="text" name='price' placeholder='Product Er Price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Er Quantity' />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}><small> {error} </small></p>
        </div>
    );
};

export default ProductForm;