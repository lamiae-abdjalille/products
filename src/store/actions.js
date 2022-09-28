import axios from "axios";

export const getProducts = ({ commit }) => {
    axios.get("https://fakestoreapi.com/products")
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        
        });
      
}

export const getProduct = ({commit}, productID) => {
    axios.get("https://fakestoreapi.com/products/"+productID)
        .then(response => {
            commit('SET_PRODUCT', response.data)
        });
}
 export const addProductToCart = ({ commit }, { product, quantity }) => {
     commit('ADD_TO_CART', { product, quantity });

}

export const descQuantity = ({ commit }, product) => {
    commit('DESC_QUANTITY', product);

}
export const removeProduct = ({ commit }, product) => {
    commit('REMOVE_FROM_CART', product);

}
 

