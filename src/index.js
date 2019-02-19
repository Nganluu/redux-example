import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { type } from 'os';
import {Provider} from 'react-redux'
import productsReducer from './reducers/product-reducer'
import userReducer from './reducers/user-reducer'
import thunk from 'redux-thunk'

console.log(userReducer);

const middleWare =[thunk]
const allReducers = combineReducers({
    user: userReducer
})
const store = createStore(
    allReducers,
    {},
    applyMiddleware(...middleWare)
);
console.log(store.getState())


ReactDOM.render(<Provider store={store}><App aRandomProps='whatever' /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
