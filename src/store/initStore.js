import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import {fetchMainInfoRequested, fetchMainInfoLoaded, fetchMainInfoError,
    fetchMainInfo} from '../actions'

const store = createStore(reducer, applyMiddleware(thunk))

const fetchMainInfoFromDB = () => dispatch => {
    dispatch(fetchMainInfoRequested())
    fetchMainInfo()
        .then((data)=>dispatch(fetchMainInfoLoaded(data)))
        .catch(err => dispatch(fetchMainInfoError(err)))
}

store.dispatch(fetchMainInfoFromDB())

export default store