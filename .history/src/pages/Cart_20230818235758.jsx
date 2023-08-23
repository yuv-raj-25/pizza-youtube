import React from 'react'

const Cart = () => {
  return (
    <>
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

      <ul>
        <li>
          <div>
            <div>
              <img className='rounded-full' src="/images/peproni.png" alt="Pizza" />
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    </>
    
  )
}

export default Cart;