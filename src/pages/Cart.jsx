import React from "react";
import { useEffect,useState,useContext } from "react";
import { CartContext } from "../CartContext";


const Cart = () => {

  const { cart } = useContext(CartContext);

  useEffect(()=>{
    if(!cart.items){
      return;
    }
    console.log('cart',Object.keys(cart.items));
    
    // fetch('http://localhost:8080/api/products/cart-items',{

    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {ids: Object.keys(cart.items)}

    // })

  },[])
  return (
    <>
      <div className="container mx-auto lg:w-1/2 w-full pb-24">
        <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

        <ul>
          <li className="my-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="rounded-full h-16"
                  src="/images/peproni.png"
                  alt="Pizza"
                />
                <span className="font-bold px-5 ml-4 w-48">Havana special</span>
              </div>

              <div>
                <button className="bg-yellow-500 px-4 rounded-full py-1 leading-none">
                  -
                </button>
                <span className="mx-3">2</span>
                <button className="bg-yellow-500 px-5 rounded-full py-1 leading-none">
                  +
                </button>
              </div>

              <span>₹ 500</span>

              <button className="bg-red-500 rounded-full px-2 text-white">
                Delete
              </button>
            </div>
          </li>
          <li className="my-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  className="rounded-full h-16"
                  src="/images/peproni.png"
                  alt="Pizza"
                />
                <span className="font-bold px-5 ml-4 w-48">Havana special</span>
              </div>

              <div>
                <button className="bg-yellow-500 px-4 rounded-full py-1 leading-none">
                  -
                </button>
                <span className="mx-3">2</span>
                <button className="bg-yellow-500 px-5 rounded-full py-1 leading-none">
                  +
                </button>
              </div>
              <span>₹ 500</span>
              <button className="bg-red-500 rounded-full px-2 text-white">
                Delete
              </button>
            </div>
          </li>
        </ul>
        <hr className="my-8" />
        <div className="text-right font-bold">Grand total: ₹ 1000</div>
        <div className="text-right mt-4">
          <button className="text-white bg-yellow-500 rounded-full px-4 py-2 leading-none">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
