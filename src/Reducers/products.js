const initialState = []

const productsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'ADD_PRODUCTS':
            return [...state, action.payload]
        default:
            return [...state]
    }
}

export default productsReducer