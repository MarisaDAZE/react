import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './js/components/Demo';
import Table from './js/components/Table';
import * as serviceWorker from './serviceWorker';

//组件

ReactDOM.render(<h1>hello world</h1>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Demo />, document.getElementById('root'));
ReactDOM.render(<Table name='GDP列表'/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
