import React from "react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  let total = 0;
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(CartContext);
  const [priceFetch, togglePriceFetched] = useState(false);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    if (priceFetch) {
      return;
    }
    // console.log("cart", Object.keys(cart.items));

    fetch("http://localhost:8080/api/products/cart-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) }),
    })
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        togglePriceFetched(true);
      });
  }, [cart,priceFetch]);

  const getOnty = (productsID) => {
    return cart.items[productsID];
  };

  const increment = (productsID) => {
    const existingQnty = cart.items[productsID];
    const _cart = { ...cart };
    _cart.items[productsID] = existingQnty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  };

  const decrement = (productsID) => {
    const existingQnty = cart.items[productsID];

    if (existingQnty === 1) {
      return;
    }
    const _cart = { ...cart };
    _cart.items[productsID] = existingQnty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  };

  const deleteitem = (productsID) => {
    const _cart = { ...cart };
    _cart.totalItems -= _cart.items[productsID];

    delete _cart.items[productsID];

    // _cart.totalItems -= _cart.items[productsID];
    setCart(_cart);

    const updateProduct = products.filter(
      (products) => products._id !== productsID
    );
    setProducts(updateProduct);
  };

  const getsum = (productsID, Price) => {
    const sum = Price * getOnty(productsID);
    total += sum;
    return sum;
  };
  const handleOrderNow = (productID) =>{
    window.alert('order Placed successfully!');
    setProducts([]);
    setCart({});
  }

  return (
    <>
      {products.length ? (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
          <h1 className="my-12 font-bold text-lg ">Cart Items</h1>

          <ul>
            {products.map((products) => {
              return (
                <li className="my-5" key={products._id}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        className="rounded-full h-16"
                        src="/images/peproni.png"
                        alt="Pizza"
                      />
                      <span className="font-bold px-5 ml-4 w-48">
                        {products.name}
                      </span>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          decrement(products._id);
                        }}
                        className="bg-yellow-500 px-4 rounded-full py-1 leading-none"
                      >
                        -
                      </button>
                      <span className="mx-3">{getOnty(products._id)}</span>
                      <button
                        onClick={() => {
                          increment(products._id);
                        }}
                        className="bg-yellow-500 px-5 rounded-full py-1 leading-none"
                      >
                        +
                      </button>
                    </div>

                    <span>₹ {getsum(products._id, products.price)}</span>

                    <button
                      onClick={() => {
                        deleteitem(products._id);
                      }}
                      className="bg-red-500 rounded-full px-2 text-white"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <hr className="my-8" />
          <div className="text-right font-bold"> Grand total: ₹ {total}</div>
          <div className="text-right mt-4">
            <button onClick={handleOrderNow} className="text-white bg-yellow-500 rounded-full px-4 py-2 leading-none">
              Order Now
            </button>
          </div>
        </div>
      ) : (
        
        <img
          className="mx-auto w-1/2 mt-12"
          src="/images/empty-cart.png"
          alt="the cart is empty"
        />
      )}
    </>
  );
};

export default Cart;
