import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../store/cartSlice'

export default function SingleProduct() {
    const [singleProduct, setSingleProduct] = useState(null);
    const params = useParams();
    const productId = parseInt(params.productId, 10);
    const dispatch = useDispatch();

    useEffect(() => {
        // Fetch product details from the external API
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(product => setSingleProduct(product))
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    const { title, image, price, description, category } = singleProduct;

    return (
        <div className='container singleProduct'>
            <div className="row align-items-center">
                <div className="col-md-6 p-4">
                    <img className='productImage' src={image} alt={title} />
                </div>
                <div className="col-md-6 productDesc">
                    <p>Category: {category}</p>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <h5>Price: ₹ {price}</h5>
                    <button className="btn btn-sm btn-primary" onClick={() => handleAdd(singleProduct)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}
