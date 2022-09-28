
let cart = window.localStorage.getItem('cart');

export default {
    products: [],
    product: null,
    cart: cart ? JSON.parse(cart) : [],
    
}