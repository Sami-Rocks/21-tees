const initialState = []

const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const existingItem = state.find((product) => product.id === action.payload.id)
            if(existingItem) {
                return [...state]
            }
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id)
        case 'UPDATE_CART_ITEM':
            const copiedState = [...state]
            const productIndex = state.map((product) => product.id).indexOf(action.payload.id);
            if (productIndex !== -1) {
                copiedState.splice(productIndex, 1, action.payload);
                return copiedState
            }
            return [...state]
        default:
            return [...state]
    }
}

export default cartReducer