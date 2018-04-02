import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middle';
import userReducer from './ducks/userReducer';


// Combine Reducers
const store = createStore(
    combineReducers({ userReduccer }),
    applyMiddleware(promiseMiddleware())
);

export default store;