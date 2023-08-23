import React from 'react'
import Product from './product'


const Products = () => {
  const user = "hii"
    let list = [1,2,3,4,5,6,7,8,9];
  
  return (
    <>
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">

       
        <div>
            <img src="/images/peproni.png" alt="pizza" />
            <div className="text-center">
            <h3 className="text-lg font-bold py-2">Havana special</h3>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">small</span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span>₹ 500</span>
              <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
            </div>
        </div>
      

      </div>
    </div>

    </>
  )
}

export default Products;