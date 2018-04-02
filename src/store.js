import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';


// Combine Reducers
const store = createStore(
    combineReducers({ userReducer }),
    applyMiddleware(promiseMiddleware())
);

export default store;