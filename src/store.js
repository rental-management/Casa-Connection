import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './ducks/userReducer';
import propertiesReducer from './ducks/propertiesReducer';
import contractorsReducer from './ducks/contractorsReducer';


// Combine Reducers
const store = createStore(
    combineReducers({ userReducer, propertiesReducer, contractorsReducer }),
    applyMiddleware(promiseMiddleware())
);

export default store;