import React from 'react'
import { useState , useEffect } from 'react'

const Product = (props) => {
  return (

    <div>
    <img src={`${props.product}`} alt="pizza" />

    <div className="text-center">
        <h3 className="text-lg font-bold py-2">{props.product.name}</h3>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{props.product.size}</span>
    </div>

    <div className="flex justify-between items-center mt-4">
         <span>₹ {props.product.price}</span>
         <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
    </div>

</div>
  )
}

export default Product