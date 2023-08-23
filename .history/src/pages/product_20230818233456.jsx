import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


const Product = ({product}) => {
  const {isAdding , setIsAdded} = useState(false);
  const {cart, setCart} = useContext(CartContext)


  const addToCart =(event,product)=> {
    event.preventDefault();
        let _cart = {...cart}; // { items: {}}
        if (!_cart.items) {
            _cart.items = {}
        }
        if (_cart.items[product._id]) {
            _cart.items[product._id] += 1;
        } else {
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems) {
            _cart.totalItems = 0;
        }
        _cart.totalItems += 1;
        setCart(_cart);
        
        
  }
  return (
    <Link to={`/products/${product._id}`}>
      <div>
        <img className='rounded-full' src="/images/peproni.png" alt="pizza" />
        <div className="text-center">
          <h3 className="text-lg font-bold py-2">{product.name}</h3>
          <span className="bg-gray-200  py-1 rounded-full text-sm px-4">{product.size}</span>
        </div>
        <div className="justify-between flex items-center mt-4">
          <span>₹ {product.price}</span>
          <button onClick ={(e)=>addToCart(e,product)} className={` bg- py-1 px-4 rounded-full font-bold` }>ADD</button>
        </div>
      </div>
    </Link>
  )
}

export default Product;