// import {createStore} from 'redux';
// import {reducer} from '../reducer'

// const store = createStore(reducer)

// export default store;

import {createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import {reducer, reducer2} from '../reducer'


const rootReducer = combineReducers({
    data:reducer,
    data1:reducer2,
});
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;