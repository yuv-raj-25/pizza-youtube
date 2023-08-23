import React from 'react'
import Product from './product'
import { useState, useEffect } from 'react'


const Products = () => {
  const [product, setProducts] = useState();
  useEffect(() => {
    const get = async () => {
      await fetch('http://localhost:5000/api/products')
        .then(response => {
          
          response.json()})
        .then(products => {
          console.log(products);
        })
    }

    get();

  }, [])
  return (
    <>
      <div className="container mx-auto pb-24">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">

          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />


        </div>
      </div>

    </>
  )
}

export default Products;