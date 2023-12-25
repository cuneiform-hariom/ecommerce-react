import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className='container'>
      <h2>Cart</h2>
      <table className='table carttable'>
        <thead>
          <tr>
            <th>
              <h5>Product image</h5>
            </th>
            <th>
              <h5>Product Name</h5>
            </th>
            <th>
              <h5>Quantity</h5>
            </th>
            <th>
              <h5>Price</h5>
            </th>
            <th>
              <h5>Action</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            console.log('cart:', product)
            return (
              <tr key={product.id}>
                <td className='try'>
                  <img src={product.image} alt='' />
                </td>
                <td>
                  <Link to={`/products/${product.id}`}>
                    <h5>{product.title}</h5>
                  </Link>
                </td>
                <td></td>
                <td>
                  <h5>{product.price}</h5>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => handleRemove(product.id)}
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>
              <h2>Total</h2>
            </td>
            <td></td>
            <td></td>
            <td>
              <h5>{calculateTotal()}</h5>
            </td>
            <td>
              <button className='btn btn-success'>Checkout Now</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
