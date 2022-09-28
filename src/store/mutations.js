
export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product; 
    
}

export const ADD_TO_CART = (state, { product, quantity }) => {
    
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;
    });

    if (productInCart) {
        productInCart.quantity += 1;  
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
        return;
    }

    state.cart.push({
        product,
        quantity
    });  

    window.localStorage.setItem('cart', JSON.stringify(state.cart));
}

export const REMOVE_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item => {
        return item.product.id !== product.id;
    })
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
}

export const DESC_QUANTITY = (state, product) => {
    if (state.cart.length > 0) {

            let index = state.cart.findIndex(el => el.product.id === product.id)
            if (state.cart[index].quantity > 1 ) {
                state.cart[index].quantity -= 1;
            }
            else {
                state.cart[index].quantity = 1;
            }
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
    }
    


}
