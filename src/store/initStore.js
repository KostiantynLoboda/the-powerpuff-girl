import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { fetchMainInfo } from '../services'

const store = createStore(reducer, applyMiddleware(thunk))

store.dispatch(fetchMainInfo())

export default store