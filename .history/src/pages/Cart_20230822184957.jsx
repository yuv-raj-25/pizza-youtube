import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

      <ul>
        <li>
          <div className='flex items-center justify-between'>

            <div className='flex items-center'>
              <img className='rounded-full h-16' src="/images/peproni.png" alt="Pizza" />
              <span className='font-bold px-5 ml-4 w-48'>Havana special</span>
            </div>

            <div>
              <button className='bg-yellow-500 px-4 rounded-full py-1 leading-none'>-</button>
              <span className='mx-3'>2</span>
              <button className='bg-yellow-500 px-5 rounded-full py-1 leading-none'>+</button>
            </div>

            <span>₹ 500</span>

            <button className='bg-red-500 rounded-full px-2 text-white'>Delete</button>

          </div>
        </li>
      </ul>
    </div>
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

      <ul>
        <li>
          <div className='flex items-center justify-between'>

            <div className='flex items-center'>
              <img className='rounded-full h-16' src="/images/peproni.png" alt="Pizza" />
              <span className='font-bold px-5 ml-4 w-48'>Havana special</span>
            </div>

            <div>
              <button className='bg-yellow-500 px-4 rounded-full py-1 leading-none'>-</button>
              <span className='mx-3'>2</span>
              <button className='bg-yellow-500 px-5 rounded-full py-1 leading-none'>+</button>
            </div>

            <span>₹ 500</span>

            <button className='bg-red-500 rounded-full px-2 text-white'>Delete</button>

          </div>
        </li>
      </ul>
    </div>
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

      <ul>
        <li>
          <div className='flex items-center justify-between'>

            <div className='flex items-center'>
              <img className='rounded-full h-16' src="/images/peproni.png" alt="Pizza" />
              <span className='font-bold px-5 ml-4 w-48'>Havana special</span>
            </div>

            <div>
              <button className='bg-yellow-500 px-4 rounded-full py-1 leading-none'>-</button>
              <span className='mx-3'>2</span>
              <button className='bg-yellow-500 px-5 rounded-full py-1 leading-none'>+</button>
            </div>

            <span>₹ 500</span>

            <button className='bg-red-500 rounded-full px-2 text-white'>Delete</button>

          </div>
        </li>
      </ul>
    </div>

    </>
    
  )
}

export default Cart;