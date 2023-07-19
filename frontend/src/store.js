
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducers/errorReducer';
import { combineReducers } from 'redux';
const inititalState = {};
let reducers = combineReducers({

    errors: errorReducer
})

const store = configureStore(
    {reducer:reducers}, 
        inititalState, 
        compose(applyMiddleware(thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;