import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import reducer from "./reducers";
import Root from './Root'

const store = createStore(reducer)
ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

