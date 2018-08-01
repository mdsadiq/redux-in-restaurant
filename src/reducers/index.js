import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import inventoryReducer from './inventoryReducer';
import apiStatusReducer from './apiStatusReducer';
export default combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    apiStatus: apiStatusReducer
})

