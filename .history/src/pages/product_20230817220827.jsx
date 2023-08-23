import React from 'react'
import { Link } from 'react-router-dom'


const Product = (props) => {
  return (

    <Link to = "/products/abcdef">
    <div>

<img className='rounded' src="/images/peproni.png" alt="pizza" />

<div className="text-center">
    <h3 className="text-lg font-bold py-2">{props.product.name}</h3>
    <span className="bg-gray-200  py-1 rounded-full text-sm px-4">{props.product.size}</span>
</div>

<div className="justify-between flex items-center mt-4">
     <span>₹ {props.product.price}</span>
     <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
</div>

</div>
    </Link>

  )
}

export default Product;