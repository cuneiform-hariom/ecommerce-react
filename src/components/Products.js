import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { fetchProducts, STATUES } from '../store/productSlice'
import { Link } from 'react-router-dom'

const Products = () => {

    const dispatch = useDispatch();

    const { data: products, status } = useSelector((state) => state.product)

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if (status === STATUES.LOADING) {
        return <h2>Loading...</h2>
    }

    if (status === STATUES.ERROR) {
        return <h2>Something went wrong</h2>
    }


    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-3 mb-4" key={product.id}>
                                <div className="productcard card">
                                    <Link to={`/products/${product.id}`}>
                                        <img src={product.image} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body">
                                        <p className="card-text">Category : {product.category}</p>
                                        <Link to={`/products/${product.id}`}>
                                            <h5 className="card-title">{product.title}</h5>
                                        </Link>
                                        <h4> ₹ {product.price}</h4>
                                        <button className="btn btn-sm btn-primary" onClick={() => handleAdd(product)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products
