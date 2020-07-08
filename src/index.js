import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from "./reducers";

const store = createStore(reducer,compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : ()=>{}
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

