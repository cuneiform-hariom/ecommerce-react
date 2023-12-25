import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const itemcount = useSelector((state) => state.cart)


  return (
    <div className='navbar'>
      <Link className='navlink' to='/'>
        <h2>Ecommerce App</h2>
      </Link>
      <nav>
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/cart'>Cart({itemcount.length})</Link>
      </nav>
    </div>
  )
}

export default Navbar
