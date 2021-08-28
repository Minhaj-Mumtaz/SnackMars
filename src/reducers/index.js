import ProductReducer from './ProductReducer';
import cartItems from './cartItems';
import {combineReducers} from 'redux';

export default combineReducers({
    selectProductId : ProductReducer, // selectedLibraryId: ^reducer
    cartItems : cartItems,
})
