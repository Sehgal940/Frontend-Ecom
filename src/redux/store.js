import {createStore,combineReducers,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'
import { getProductsReducer } from './reducers/productReducer'
import { getProductReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'
import {orderReducer} from './reducers/orderReducer'
const reducer=combineReducers({
    getProducts:getProductsReducer,
    getProduct:getProductReducer,
    getCart:cartReducer,
    getOrder:orderReducer
})
const middleware=[thunk]
const store=createStore(
    reducer,composeWithDevTools(applyMiddleware(...middleware))
)
export default store