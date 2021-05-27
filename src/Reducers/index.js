import cartReducer from './cart.js'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    cart: cartReducer
})

export default allReducers