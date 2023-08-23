import React from 'react'


const Products = () => {
  return (
    <>
    <div className="container mx-auto pb-25">

      <h1 className="text-lg font-bold my-8">Products</h1>

      <div className="grid grid-cols-5 my-8 gap 24">
        <div>
            <img src="/images/peproni.png" alt="pizza" />
            <h3 className="text-lg font-bold py-2">Havana special</h3>
            <span className="bg-gray">small</span>

            <div>
              <span>₹ 500</span>
              <button>ADD</button>
            </div>
        </div>
      </div>

    </div>

    </>
  )
}

export default Products;