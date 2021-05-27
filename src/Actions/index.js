export const addToCart = (payload) => {
    return{
        payload: payload,
        type: 'ADD_TO_CART'
    }
}
export const removeFromCart = (payload) => {
    return{
        payload: payload,
        type: 'REMOVE_FROM_CART'
    }
}