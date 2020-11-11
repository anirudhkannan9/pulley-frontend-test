import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import allReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [thunk]


const store = createStore(
    allReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
    )

export default store 
