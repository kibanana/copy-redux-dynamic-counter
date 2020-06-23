import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
