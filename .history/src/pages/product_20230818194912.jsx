import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


const Product = ({product}) => {
  const {cart}=  useContext(CartContext)
  const addToCart =(e,product)=> {
    e.preventDefault();


  }
  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img className='rounded-full' src="/images/peproni.png" alt="pizza" />
        <div className="text-center">
          <h3 className="text-lg font-bold py-2">{product.name}</h3>
          <span className="bg-gray-200  py-1 rounded-full text-sm px-4">{product.size}</span>
        </div>
        <div className="justify-between flex items-center mt-4">
          <span>₹ {product.price}</span>
          <button onClick ={(e)=>addToCart(e,product)} className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
        </div>
      </div>
    </Link>
  )
}

export default Product;