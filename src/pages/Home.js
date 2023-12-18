import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
      <h1 className='t-center'>Welcome to myStore</h1>      

      <div className="container">
        <Products/>
      </div>
    </div>
  )
}

export default Home
