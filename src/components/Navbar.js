import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const itemcount = useSelector((state) => state.cart)


  return (
    <div className='navbar'>
      <span>Redux Practical</span>
      <nav>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/cart'>Cart</Link>
        <span className="cartcount">
            Cart Item : {itemcount.length}
        </span>
      </nav>
    </div>
  )
}

export default Navbar
