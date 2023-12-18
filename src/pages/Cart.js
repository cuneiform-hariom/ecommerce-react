import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {

  const products = useSelector(state => state.cart);
  console.log("products:", products)

  const dispatch= useDispatch()

  const handleRemove = (productid) => {
    dispatch(remove(productid))

  }

  return (
    <div className='container'>
      <h2>Cart</h2>
      <table className="table carttable">
        <thead>
          <tr>
            <th><h5>Product image</h5></th>
            <th><h5>Product Name</h5></th>
            <th><h5>Price</h5></th>
            <th><h5>Action</h5></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => {
              return (
                <tr key={product.id}>
                  <td className='try'><img src={product.image} alt="" /></td>
                  <td><h5>{product.title}</h5></td>
                  <td><h5>{product.price}</h5></td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => handleRemove(product.id)}>remove</button></td>
                </tr>
              )
            })
          }
          <tr>
            <td><h2>Total</h2></td>
            <td></td>
            <td><h5>789</h5></td>
            <td><button className="btn btn-success">Checkout Now</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Cart
