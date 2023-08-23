import React from 'react'
import Product from './product'


const Products = () => {
  const user = "hii"
  const loop = (e) => {
    for(let i = 0; i < 15; i++){
      e;
    }
  }
  return (
    <>
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">

        {
          loop(<Product)
        }

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