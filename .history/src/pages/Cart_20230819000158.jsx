import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

      <ul>
        <li>
          <div>
            <div className='flex items-center'>
              <img className='rounded-full h-16' src="/images/peproni.png" alt="Pizza" />
              <span className='font-bold px- ml-4 w-48'>Havana special</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    </>
    
  )
}

export default Cart;