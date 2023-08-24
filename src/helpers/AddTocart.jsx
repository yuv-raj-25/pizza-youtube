export default async function AddToCart(cart, setCart, product){
    let _cart = { ...cart }; 
    if (!_cart.items) {
      _cart.items = {}
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }
    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

}