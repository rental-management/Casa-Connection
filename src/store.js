import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import propertiesReducer from './ducks/propertiesReducer';


// Combine Reducers
const store = createStore(
    combineReducers({ userReducer, propertiesReducer }),
    applyMiddleware(promiseMiddleware())
);

export default store;